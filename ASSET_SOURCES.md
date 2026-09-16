# SAEID SPORTS — Asset Sources

## 3D models

The site uses web-optimized GLB assets from [3DAssets.dev](https://3dassets.dev/) when a relevant model is available. 3DAssets.dev publishes its models under **CC0 1.0 Universal** and provides immutable CORS-enabled CDN URLs suitable for Three.js.

Curated critical assets currently used during initial arena loading:

| Sport | Asset | CDN |
|---|---|---|
| Football | Full size open net soccer goal | `https://cdn.3dassets.dev/assets/19087/v1/model.glb` |
| Basketball | Portable Training Hoop | `https://cdn.3dassets.dev/assets/28547/v1/model.glb` |
| Tennis | Tennis Racket | `https://cdn.3dassets.dev/assets/33614/v1/model.glb` |
| Cycling | Track Bicycle (Leaned) | `https://cdn.3dassets.dev/assets/38014/v1/model.glb` |
| Motorsport | Full-face helmet on stand | `https://cdn.3dassets.dev/assets/15435/v1/model.glb` |
| Ice Hockey | Hockey Stick, Heel Curve | `https://cdn.3dassets.dev/assets/33716/v1/model.glb` |

For the remaining sports and for the equipment inspector, the browser queries the public 3DAssets.dev search API and uses the returned immutable `cdnUrl` when a relevant result is available. If the model service or a matching asset is unavailable, the app falls back to a sport-specific procedural object rather than failing the scene.

## Photography and visual references

Overview, equipment, clothing, and gallery images are requested on demand from **Wikimedia Commons** using the public MediaWiki API. The UI retains the creator/license label returned in image metadata. If the network request fails, SAEID SPORTS renders a branded local SVG fallback so the browser never shows a broken-image icon.

## Runtime libraries

- Three.js `0.180.0`
- Three.js `OrbitControls`
- Three.js `GLTFLoader`

All paths used by the repository itself are relative so GitHub Pages continues to work from the `Saeid-Sports-` subdirectory.
