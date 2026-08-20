import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Next.js 16 + Takumi Image Generator",
    template: "%s | Next.js 16 + Takumi",
  },
  description:
    "High-performance server-side image rendering engine in Next.js 16 powered by Takumi Rust bindings (@takumi-rs/core) and drop-in ImageResponse.",
  keywords: [
    "Next.js 16",
    "Takumi",
    "takumi-js",
    "OG Image Generator",
    "JSX to Image",
    "Rust Image Rendering",
    "ImageResponse",
    "OpenGraph",
  ],
  authors: [{ name: "Rajdeep Singh" }],
  creator: "Takumi Example",
  publisher: "Takumi Example",
  openGraph: {
    title: "Next.js 16 + Takumi Image Generator",
    description:
      "High-performance server-side image rendering engine in Next.js 16 powered by Takumi Rust bindings.",
    url: "/",
    siteName: "Next.js 16 + Takumi",
    images: [
      {
        url: "/og?title=Next.js%2016%20%2B%20Takumi",
        width: 1200,
        height: 630,
        alt: "Next.js 16 + Takumi OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 16 + Takumi Image Generator",
    description:
      "High-performance server-side image rendering engine in Next.js 16 powered by Takumi Rust bindings.",
    images: ["/og?title=Next.js%2016%20%2B%20Takumi"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "takumi:version": "2.10.0",
    framework: "Next.js 16",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
