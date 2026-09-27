// Pointing directly to your repository
const GITHUB_OWNER = "viewsgaming";
const GITHUB_REPO = "Public";

function formatBytes(bytes) {
  if (!bytes || bytes === 0) return "0 MB";
  const mb = bytes / (1024 * 1024);
  return mb.toFixed(1) + " MB";
}

function formatDate(dateString) {
  if (!dateString) return "Recently";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

async function loadReleaseInfo() {
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const release = await response.json();

    // 1. Locate the modpack zip asset
    const zipAsset = release.assets.find(a => a.name.endsWith(".zip")) || release.assets[0];

    // 2. Set file size
    if (zipAsset && zipAsset.size) {
      document.getElementById("fileSize").innerText = formatBytes(zipAsset.size);
    }

    // 3. Set download counts
    if (zipAsset && zipAsset.download_count !== undefined) {
      document.getElementById("downloadCount").innerText = zipAsset.download_count.toLocaleString();
    }

    // 4. Update versions and release tags
    if (release.tag_name) {
      document.getElementById("releaseTag").innerText = release.tag_name;
      document.getElementById("tagVersion").innerText = release.tag_name;
    }

    if (release.name) {
      document.getElementById("releaseTitle").innerText = release.name;
    }

    // 5. Update timestamp
    if (release.published_at) {
      document.getElementById("publishDate").innerText = formatDate(release.published_at);
    }

    // 6. Bind live download link
    if (zipAsset && zipAsset.browser_download_url) {
      document.getElementById("downloadBtn").href = zipAsset.browser_download_url;
      document.getElementById("fileName").innerText = zipAsset.name;
    }

    // 7. Parse custom GitHub release notes into the manifest if you typed any
    if (release.body && release.body.trim().length > 0) {
      const bulletLines = release.body
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.startsWith("-") || line.startsWith("*"));

      if (bulletLines.length > 0) {
        const listContainer = document.getElementById("contentsList");
        listContainer.innerHTML = ""; // Clear fallback items

        bulletLines.forEach(item => {
          const cleanText = item.replace(/^[-*]\s*/, "");
          const el = document.createElement("div");
          el.className = "manifest-item";
          el.innerHTML = `
            <div class="item-left">
              <span class="item-type">SYNCED</span>
              <span class="item-name">${cleanText}</span>
            </div>
            <span class="item-note">From release note</span>
          `;
          listContainer.appendChild(el);
        });

        document.getElementById("manifestSubtitle").innerText = "Auto-synced with release notes:";
        document.getElementById("assetCounter").innerText = `${bulletLines.length} Items`;
      }
    }

  } catch (err) {
    console.warn("Could not query GitHub API (using defaults):", err);
    document.getElementById("fileSize").innerText = "142.8 MB";
    document.getElementById("releaseTag").innerText = "v1.0.0";
    document.getElementById("tagVersion").innerText = "v1.0.0";
  }
}

document.addEventListener("DOMContentLoaded", loadReleaseInfo);
