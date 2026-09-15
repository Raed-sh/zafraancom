import type { Metadata, Viewport } from "next";
import { images } from "@/lib/images";
import "./globals.css";

export const metadata: Metadata = {
  title: "زعفرانكم | Zaffarn",
  icons: { icon: images.logo.src },
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
  return children;
}
