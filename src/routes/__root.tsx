import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyVisitCta } from "@/components/sticky-visit-cta";
import appCss from "../styles.css?url";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

const title = "Jolly Home Daycare · Licensed Family Day Home in Potomac Station, Leesburg, VA";
const description =
  "Licensed family day home and home daycare in Potomac Station, Leesburg, Virginia. Infants from 2 months through preschool, plus before- and after-school care. Serving families since 2000.";
const ogImage = `${site.publicUrl}/og.jpg`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#1B3022" },
      { name: "geo.region", content: "US-VA" },
      { name: "geo.placename", content: "Leesburg" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.publicUrl },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: asset("favicon.svg") },
      { rel: "apple-touch-icon", href: asset("images/logo.png") },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;1,6..72,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
      { rel: "canonical", href: site.publicUrl },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-paper font-sans text-ink">
        <PreviewHostBridge />
        <LocalBusinessJsonLd />
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <div className="flex-1">
              <Outlet />
            </div>
            <SiteFooter />
          </div>
          <StickyVisitCta />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
