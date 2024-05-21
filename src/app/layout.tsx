import type { Metadata } from "next";
import "./globals.css";
import BackgroundParallax from "@/components/BackgroundParallax/BackgroundParallax";

export const metadata: Metadata = {
  title: "GriffsVoid",
  description: "Internet void of Griffin Ferguson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundParallax>
          {children}
        </BackgroundParallax>
      </body>
    </html>
  );
}
