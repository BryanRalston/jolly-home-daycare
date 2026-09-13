/** Cloudflare Web Analytics beacon for the GitHub Pages site. */
export const CLOUDFLARE_BEACON_TOKEN = "94428ff41ec64824b100ba70c7a9aece";

export const CLOUDFLARE_BEACON_SNIPPET = `<!-- Cloudflare Web Analytics -->
<script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "${CLOUDFLARE_BEACON_TOKEN}"}'></script>
<!-- End Cloudflare Web Analytics -->
`;

export function htmlHasCloudflareBeacon(html) {
  return (
    String(html).includes("cloudflareinsights.com/beacon.min.js") &&
    String(html).includes(CLOUDFLARE_BEACON_TOKEN)
  );
}

/** Insert the official snippet once, just before </body> when possible. */
export function ensureCloudflareBeacon(html) {
  const source = String(html);
  if (htmlHasCloudflareBeacon(source)) return source;
  if (/<\/body>/i.test(source)) {
    return source.replace(/<\/body>/i, `${CLOUDFLARE_BEACON_SNIPPET}</body>`);
  }
  return `${source}${CLOUDFLARE_BEACON_SNIPPET}`;
}
