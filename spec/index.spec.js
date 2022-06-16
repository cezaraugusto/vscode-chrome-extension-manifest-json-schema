const fs = require('fs')
const path = require('path')
var {validate} = require('jsonschema');
const manifestV3Schema =
  require('../node_modules/chrome-extension-manifest-json-schema/manifest/manifest.schema.v3.json');

const invalidManifest = [
  'externally_connectable_all_urls_not_allowlisted.json',
  'externally_connectable_matches.json',
  'externally_connectable_all_urls_allowlisted.json',
  'externally_connectable_matches_tls_channel_id.json',
  'externally_connectable_all_ids.json',
  'sandboxed_pages_invalid_1.json',
  'externally_connectable_ids_and_matches.json',
  'externally_connectable_error_wildcard_host.json',
  'usb_printers_filters.json',
  'csp_invalid_2.json',
  'externally_connectable_nothing_specified.json',
  'usb_printers_invalid_filter.json',
  'externally_connectable_bad_id.json',
  'csp_invalid_1.json',
  'csp_dictionary_mv2.json',
  'sandboxed_pages_invalid_2.json',
  'sandbox_invalid_type.json',
  'externally_connectable_error_wrong_format.json',
  'csp_invalid_type_v3.json',
  'externally_connectable_all_https_urls_not_allowlisted.json',
  'externally_connectable_ids.json',
  'externally_connectable_error_tld.json',
  'externally_connectable_error_effective_tld.json',
  'externally_connectable_all_https_urls_allowlisted.json',
  'externally_connectable_error_unknown_tld.json',
  'event_rules.json',
  'externally_connectable_error_bad_matches.json',
  'externally_connectable_error_all_urls.json'
]

const isValid = (instance) => validate(instance, manifestV3Schema).valid

describe("Valid Chrome extension Manifest JSON Schema", function() {
  fs.readdirSync(path.resolve(__dirname, 'fixtures')).forEach((dirNext) => {
    const manifestPath = path.resolve(__dirname, 'fixtures', dirNext)
    const manifest = require(manifestPath)

    if (invalidManifest.includes(dirNext)) {
      it(`${path.basename(dirNext)} fails because schema is invalid`, function() {
        expect(isValid(manifest)).toBeFalse();
      })
    } else {
      it(`${dirNext} succeeds because schema is valid`, function() {
        expect(isValid(manifest)).toBeTrue();
      })
    }
  })
});
