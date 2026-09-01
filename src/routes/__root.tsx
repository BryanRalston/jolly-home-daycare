import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import appCss from "../styles.css?url";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

const APP_NAME = site.name;
const ogImage = `${site.publicUrl}/og.jpg`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} · Leesburg, VA` },
      { name: "description", content: site.description },
      { name: "theme-color", content: "#F15A29" },
      { property: "og:title", content: `${APP_NAME} · Leesburg, VA` },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.publicUrl },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${APP_NAME} · Leesburg, VA` },
      { name: "twitter:description", content: site.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: asset("favicon.svg") },
      { rel: "apple-touch-icon", href: asset("og.jpg") },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap",
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
      <body className="min-h-dvh bg-cream text-ink font-sans">
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <div className="flex-1">
              <Outlet />
            </div>
            <SiteFooter />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
