import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Lord's Covenant Sanctuary | Faith, Community & Purpose",
  description:
    "A place to encounter God, grow in faith, and build meaningful community. Welcome to The Lord's Covenant Sanctuary in East Legon, Accra, Ghana.",
  keywords: [
    "The Lord's Covenant Sanctuary",
    "church",
    "faith",
    "community",
    "worship",
    "sermons",
    "ministries",
    "Sunday service",
  ],
  openGraph: {
    title: "The Lord's Covenant Sanctuary | Faith, Community & Purpose",
    description:
      "A place to encounter God, grow in faith, and build meaningful community.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso font-sans">
        {children}
      </body>
    </html>
  );
}
