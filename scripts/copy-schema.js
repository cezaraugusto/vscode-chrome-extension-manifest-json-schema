// Copies the schema from the npm dependency (the source of truth) into
// schemas/ so it ships inside the .vsix. The jsonValidation contribution
// points at this local copy; relying on node_modules being packaged is
// fragile under pnpm's symlinked layout. Run before packaging/publishing.
const fs = require('fs')
const path = require('path')

const src = require.resolve(
  'chrome-extension-manifest-json-schema/manifest/manifest.schema.v3.json'
)
const destDir = path.join(__dirname, '..', 'schemas')
fs.mkdirSync(destDir, {recursive: true})
fs.copyFileSync(src, path.join(destDir, 'manifest.schema.v3.json'))
console.log('Copied manifest.schema.v3.json into schemas/')
