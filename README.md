# NeoForge 1.21.1 Client Pack

Client-side files for our Minecraft server. This pack bundles all required mechanical mods, world generation biomes, client optimizations, and shader configs so everyone has the exact same block IDs and nobody gets stuck on the loading screen.

---

## ⚡ Requirements

Before setting this up, make sure your launcher meets these:

- **Minecraft Version:** `1.21.1`
- **Mod Loader:** **NeoForge 21.1.x** *(Do NOT use normal Forge or Fabric, it will crash)*
- **Java Runtime:** **Java 21** (Required for 1.20.5+)
- **RAM Allocation:** **4 GB to 6 GB** (4096 MB – 6144 MB)

---

## 📦 Installation Guide

### Step 1: Download
Grab the latest zip package from the [Releases](https://github.com/viewsgaming/Public/releases/latest) section:
- File name: `NeoForge_1.21.1_Full_Player_Pack.zip`

### Step 2: Unzip
**Don't drag the `.zip` into your mods folder.** Extract the archive first using 7-Zip, WinRAR, or ZArchiver. You should see individual `.jar` files inside.

### Step 3: Put into your `mods/` folder
Delete any old mods in your folder to prevent conflicts, then drop all the new `.jar` files in:

- **Windows:** Press `Win + R` → type `%appdata%\.minecraft\mods` → hit Enter.
- **CurseForge / Prism / Modrinth Launcher:** Right-click the instance → **Open Folder** → `mods`.
- **PojavLauncher (Android):**
  `/sdcard/Android/data/net.kdt.pojavlaunch/files/.minecraft/mods/`

### Step 4: Boot
Select the **NeoForge 1.21.1** profile and launch the game.

---

## 🛠️ Included Highlights

- **Kinetics & Industry:** Create 6.0, Create Deco, Steam & Rails
- **Terrain & Overhauls:** Terralith, Tectonic, Towns & Towers, CTOV
- **Exploration:** Lootr (Instanced dungeon chests so loot isn't stolen), When Dungeons Arise
- **Performance & Engine:** Sodium / Embeddium, Iris Shaders (pre-configured for low-end GPUs)
- **Quality of Life:** Sophisticated Backpacks & Storage, Jade, EMI, Xaero's World Map & Minimap

---

## ⚠️ Common Problems & Fixes

**Game crashes immediately with Exit Code 1 / `-1`:**
- Check your Java version. 1.21.1 requires **Java 21**. If your launcher defaults to Java 8 or Java 17, update the Java path in launcher settings.
- Make sure you actually installed **NeoForge**, not older Forge.

**Extreme lag / stuttering:**
- Open launcher settings and raise your allocated RAM to at least `4096M`. 2 GB is not enough to handle Terralith + Create.

**Can I install OptiFine?**
- **No.** OptiFine breaks modern Create and conflicts with Sodium. Sodium + Iris are already included and perform much better.

---

## 💬 Contact & Support

If you run into missing block errors, need whitelist access, or have launcher issues:
- **Discord:** `honey_me_0`
