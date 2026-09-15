import type { Metadata } from "next";
import { LanguageRedirect } from "@/components/language-redirect";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function RootPage() {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <LanguageRedirect />
      </body>
    </html>
  );
}
