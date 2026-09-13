import assert from "node:assert/strict";
import test from "node:test";
import {
  CLOUDFLARE_BEACON_SNIPPET,
  CLOUDFLARE_BEACON_TOKEN,
  ensureCloudflareBeacon,
  htmlHasCloudflareBeacon,
} from "./cloudflare-beacon.mjs";

test("snippet is the official Cloudflare Web Analytics tag", () => {
  assert.match(CLOUDFLARE_BEACON_SNIPPET, /type='module'/);
  assert.match(CLOUDFLARE_BEACON_SNIPPET, /cloudflareinsights\.com\/beacon\.min\.js/);
  assert.match(CLOUDFLARE_BEACON_SNIPPET, new RegExp(CLOUDFLARE_BEACON_TOKEN));
  assert.match(CLOUDFLARE_BEACON_SNIPPET, /<!-- Cloudflare Web Analytics -->/);
  assert.match(CLOUDFLARE_BEACON_SNIPPET, /<!-- End Cloudflare Web Analytics -->/);
});

test("ensureCloudflareBeacon inserts once before </body>", () => {
  const html = "<html><body><h1>Hi</h1></body></html>";
  const once = ensureCloudflareBeacon(html);
  assert.match(once, /beacon\.min\.js/);
  assert.match(once, /94428ff41ec64824b100ba70c7a9aece/);
  assert.equal(once.indexOf("</body>") > once.indexOf("beacon.min.js"), true);
  assert.equal(ensureCloudflareBeacon(once), once);
});

test("htmlHasCloudflareBeacon requires both src and token", () => {
  assert.equal(
    htmlHasCloudflareBeacon(
      "<script src='https://static.cloudflareinsights.com/beacon.min.js'></script>",
    ),
    false,
  );
  assert.equal(htmlHasCloudflareBeacon(CLOUDFLARE_BEACON_SNIPPET), true);
});
