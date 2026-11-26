import type { Metadata } from "next";
import { Bitter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const bitter = Bitter({ subsets: ["latin"], variable: "--font-display" });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vittles.cafe"),
  title: "Vittles Cafe | Southern Restaurant in Ozark, AL - Menu & Hours",
  description:
    "Vittles Cafe is a Southern restaurant in Ozark, AL serving country breakfast, burgers, sandwiches, dinner plates and daily specials.",
  openGraph: {
    type: "website",
    title: "Vittles Cafe | Southern Restaurant in Ozark, AL",
    description:
      "Bringing the heart of the south to your plate. See our full menu and hours.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-W5G5TD9H" />
      <body className={`${bitter.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
