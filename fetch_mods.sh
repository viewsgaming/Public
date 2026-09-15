#!/bin/bash
mkdir -p mods
cd mods

MODS=(
  "modernfix"
  "ferrite-core"
  "badoptimizations"
  "servercore"
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
)

echo "Downloading mods directly in cloud..."
for mod in "${MODS[@]}"; do
  URL=$(curl -s "https://api.modrinth.com/v2/project/$mod/version?game_versions=%5B%221.21.1%22%5D&loaders=%5B%22neoforge%22%5D" | jq -r '.[0].files[0].url // empty')
  if [ -n "$URL" ]; then
    echo "Downloading: $mod"
    curl -s -O -L "$URL"
  fi
done

cd ..
zip -r NeoForge_1.21.1_Modpack.zip mods/
echo "ZIP created successfully!"
