import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tecvion Solutions | Futuristic Software Agency",
    template: "%s | Tecvion Solutions",
  },
  description:
    "Tecvion Solutions builds premium digital ecosystems through branding, UI/UX, app development, AI-powered systems, and growth technology.",
  openGraph: {
    title: "Tecvion Solutions",
    description:
      "Premium futuristic software agency for modern digital businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
