#!/bin/bash
mkdir -p client_player_bundle
cd client_player_bundle

# Complete mod list for players (Shared Content + Client-Side Optimizations)
MODS=(
  "modernfix"
  "ferrite-core"
  "badoptimizations"
  "create"
  "createdeco"
  "terralith"
  "lithostitched"
  "tectonic"
  "towns-and-towers"
  "cristellib"
  "ctov"
  "dungeons-arise"
  "cloth-config"
  "chipped"
  "resourceful-lib"
  "athena"
  "handcrafted"
  "farmers-delight"
  "sophisticated-backpacks"
  "sophisticated-core"
  "sophisticated-storage"
  "comforts"
  "lootr"
  "apotheosis"
  "apothic-attributes"
  "apothic-enchanting"
  "apothic-spawners"
  "placebo"
  "patchouli"
  "artifacts"
  "curios"
  "sodium"
  "reeses-sodium-options"
  "iris"
  "immediatelyfast"
  "entityculling"
  "emi"
  "jade"
  "xaeros-minimap"
  "xaeros-world-map"
  "mouse-tweaks"
  "appleskin"
)

echo "Downloading all Client + Shared mods for 1.21.1 NeoForge..."
for mod in "${MODS[@]}"; do
  URL=$(curl -s "https://api.modrinth.com/v2/project/$mod/version?game_versions=%5B%221.21.1%22%5D&loaders=%5B%22neoforge%22%5D" | jq -r '.[0].files[0].url // empty')
  
  if [ -z "$URL" ]; then
    URL=$(curl -s "https://api.modrinth.com/v2/project/$mod/version?game_versions=%5B%221.21.1%22%5D" | jq -r '.[0].files[0].url // empty')
  fi

  if [ -n "$URL" ]; then
    echo "✔ Downloaded: $mod"
    curl -s -O -L "$URL"
  else
    echo "✖ Failed to resolve: $mod"
  fi
done

cd ..
zip -r NeoForge_1.21.1_Full_Player_Pack.zip client_player_bundle/
echo "Done! Full player pack created: NeoForge_1.21.1_Full_Player_Pack.zip"
