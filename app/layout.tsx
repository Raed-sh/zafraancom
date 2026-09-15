import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { images } from "@/lib/images";
import "./globals.css";

const siteUrl = "https://zaffarn.com";
const logoUrl = images.logo.src;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "زعفرانكم | Zaffarn",
    template: "%s | زعفرانكم",
  },
  description: "زعفران أردني أصيل ومنتجاته الطبيعية — جودة مختارة بلمسة محلية.",
  keywords: [
    "زعفران أردني",
    "زعفران",
    "منتجات الزعفران",
    "زيت الزعفران",
    "Zaffarn",
    "Jordanian saffron",
  ],
  authors: [{ name: "زعفرانكم" }],
  creator: "زعفرانكم",
  publisher: "زعفرانكم",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_JO",
    siteName: "زعفرانكم | Zaffarn",
    title: "زعفرانكم | زعفران أردني أصيل",
    description: "اكتشف الزعفران الأردني الأصيل ومنتجاته الطبيعية المختارة.",
    images: [
      {
        url: logoUrl,
        width: images.logo.width,
        height: images.logo.height,
        alt: "شعار زعفرانكم",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "زعفرانكم | زعفران أردني أصيل",
    description: "زعفران أردني أصيل ومنتجات طبيعية بلمسة محلية.",
    images: [logoUrl],
  },
  robots: { index: true, follow: true },
  icons: { icon: logoUrl },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "زعفرانكم",
  alternateName: "Zaffarn",
  url: siteUrl,
  logo: new URL(logoUrl, siteUrl).href,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+962778472931",
    contactType: "sales",
    areaServed: "JO",
    availableLanguage: ["ar", "en"],
  },
  sameAs: ["https://wa.me/962778472931"],
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#211d18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
