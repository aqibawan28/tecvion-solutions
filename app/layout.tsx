import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tecvion Solutions | Creative Designer Portfolio",
    template: "%s | Tecvion Solutions",
  },
  description:
    "Tecvion Solutions designs bold digital experiences, brand systems, websites, applications, social campaigns, and print visuals for future-ready brands.",
  openGraph: {
    title: "Tecvion Solutions | Creative Designer Portfolio",
    description:
      "Bold digital experiences, strategic creative systems, and premium visual direction for modern brands.",
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
