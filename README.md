# 1.21.1 Client Modpack

Required mods to play on our server. Keep this updated to avoid version mismatches and broken textures.

## Requirements
- **Minecraft:** 1.21.1
- **Loader:** NeoForge 21.1.x *(Do not use Fabric or normal Forge)*
- **Java:** Java 21
- **RAM:** 4–6 GB allocated

## Setup
Clear your current `mods/` folder to avoid conflicts, then drop all the `.jar` files in:
   - Windows: `%appdata%\.minecraft\mods`
   - Prism / CurseForge: Open instance folder -> `mods`
   - PojavLauncher: `/sdcard/Android/data/net.kdt.pojavlaunch/files/.minecraft/mods/`
4. Launch with your NeoForge profile.

## Notes & Common Fixes
- **Crashes on boot (Exit code 1):** Double check you're using Java 21. 1.21.1 won't run on Java 17.
- **Do not add OptiFine:** It crashes modern Create and conflicts with Sodium. Sodium + Iris are already included for shaders.
- **Lag:** Allocate at least 4GB RAM in your launcher settings. Terralith + world gen will stutter on 2GB.

Questions / whitelist: ping `@honey_me_0` on Discord.
