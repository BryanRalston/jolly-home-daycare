import { jsonLdText } from "@/lib/json-ld";

export function LocalBusinessJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText() }} />
  );
}
