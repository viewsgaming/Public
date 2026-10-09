const GITHUB_OWNER = "viewsgaming";
const GITHUB_REPO = "Public";

function formatBytes(bytes) {
  if (!bytes) return "0 MB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function formatDate(dateStr) {
  if (!dateStr) return "Recently";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

async function loadRelease() {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const asset = data.assets.find(a => a.name.endsWith(".zip")) || data.assets[0];

    if (asset) {
      if (asset.size) document.getElementById("fileSize").innerText = formatBytes(asset.size);
      if (asset.download_count !== undefined) document.getElementById("downloadCount").innerText = asset.download_count.toLocaleString();
      if (asset.browser_download_url) {
        document.getElementById("downloadBtn").href = asset.browser_download_url;
        document.getElementById("fileName").innerText = asset.name;
      }
    }

    if (data.tag_name) {
      document.getElementById("releaseTag").innerText = data.tag_name;
      document.getElementById("tagVersion").innerText = data.tag_name;
    }

    if (data.name) document.getElementById("releaseTitle").innerText = data.name;
    if (data.published_at) document.getElementById("publishDate").innerText = formatDate(data.published_at);

  } catch (e) {
    document.getElementById("fileSize").innerText = "142.8 MB";
    document.getElementById("releaseTag").innerText = "v1.0.0";
    document.getElementById("tagVersion").innerText = "v1.0.0";
  }
}

// Local Comment & Mod Request Handler
function setupInteractions() {
  const commentForm = document.getElementById("commentForm");
  const modForm = document.getElementById("modRequestForm");
  const feed = document.getElementById("commentsFeed");

  const loadComments = () => {
    feed.innerHTML = "";
    const stored = JSON.parse(localStorage.getItem("server_comments") || "[]");
    
    if (stored.length === 0) {
      feed.innerHTML = `<div style="font-size: 12px; color: #555;">No comments posted yet.</div>`;
      return;
    }

    stored.forEach(c => {
      const item = document.createElement("div");
      item.className = "comment-card";
      item.innerHTML = `
        <div class="comment-header">
          <span class="comment-author">${c.user}</span>
          <span class="comment-time">${c.time}</span>
        </div>
        <p class="comment-body">${c.text}</p>
      `;
      feed.appendChild(item);
    });
  };

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("authorName").value.trim();
    const text = document.getElementById("commentMsg").value.trim();

    if (!user || !text) return;

    const stored = JSON.parse(localStorage.getItem("server_comments") || "[]");
    stored.unshift({
      user,
      text,
      time: "Just now"
    });

    localStorage.setItem("server_comments", JSON.stringify(stored));
    commentForm.reset();
    loadComments();
  });

  modForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("modName").value.trim();
    const link = document.getElementById("modPlatform").value.trim();
    const reason = document.getElementById("modReason").value.trim();

    if (!name) return;

    const stored = JSON.parse(localStorage.getItem("mod_requests") || "[]");
    stored.push({ name, link, reason, date: new Date().toISOString() });
    localStorage.setItem("mod_requests", JSON.stringify(stored));

    modForm.reset();
    alert("Suggestion received.");
  });

  loadComments();
}

document.addEventListener("DOMContentLoaded", () => {
  loadRelease();
  setupInteractions();
});
