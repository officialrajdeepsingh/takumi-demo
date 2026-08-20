"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [title, setTitle] = useState("Next.js 16 + Takumi");
  const [subtitle, setSubtitle] = useState(
    "High-performance server-side OG image rendering powered by Rust"
  );
  const [tag, setTag] = useState("Takumi Engine");
  const [theme, setTheme] = useState("dark");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"route" | "convention">("route");

  // Construct dynamic OG URL
  const ogParams = new URLSearchParams({
    title,
    subtitle,
    tag,
    theme,
  });
  const ogUrl = `/og?${ogParams.toString()}`;

  const copyToClipboard = () => {
    const fullUrl = `${window.location.origin}${ogUrl}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white pb-20">
      {/* Top Header */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="invert"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={18}
              priority
            />
            <span className="text-zinc-600 font-bold text-lg">+</span>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-orange-500">
                Takumi
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                v2.10.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/officialrajdeepsingh/takumi-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://takumi.kane.tw/docs/integration/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Takumi Documentation
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-12 flex flex-col gap-16">
        {/* Hero Banner */}
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Next.js 16 + Takumi Rust Rendering Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Dynamic OpenGraph Images{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
              at Rust Speeds
            </span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Generate pixel-perfect social card images dynamically with{" "}
            <code className="text-orange-400 font-mono text-sm bg-orange-500/10 px-1.5 py-0.5 rounded">
              takumi-js/response
            </code>
            . A ultra-fast, drop-in replacement for Vercel Satori and{" "}
            <code className="text-zinc-300 font-mono text-sm bg-zinc-800 px-1.5 py-0.5 rounded">
              @vercel/og
            </code>
            .
          </p>
        </section>

        {/* Live Playground */}
        <section className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>🎨</span> Interactive OG Image Generator
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Customize parameters below and see the live rendered image from{" "}
                <code className="text-orange-400 font-mono">/og</code> endpoint.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all flex items-center gap-2"
              >
                <span>{copied ? "✓ Copied!" : "📋 Copy Image URL"}</span>
              </button>
              <a
                href={ogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-orange-600 hover:bg-orange-500 text-white transition-all flex items-center gap-1.5"
              >
                <span>Open Endpoint</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls Form */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Enter title..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Subtitle
                </label>
                <textarea
                  rows={2}
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Enter subtitle..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Tag / Badge Label
                </label>
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="e.g. Takumi Engine"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Color Theme Preset
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "dark", label: "Dark" },
                    { id: "gradient", label: "Warm" },
                    { id: "sunset", label: "Sunset" },
                    { id: "ocean", label: "Ocean" },
                    { id: "neon", label: "Neon" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all ${theme === t.id
                        ? "bg-orange-500/10 border-orange-500 text-orange-400 font-semibold"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/80">
                <div className="text-xs font-mono text-zinc-400 break-all bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500">GET</span> {ogUrl}
                </div>
              </div>
            </div>

            {/* Live Render Preview */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                <span className="font-semibold uppercase tracking-wider text-zinc-400">
                  Live Generated Image Output (1200x630)
                </span>
                <span className="text-orange-400 font-mono">Takumi Engine</span>
              </div>

              <div className="relative w-full aspect-[1200/630] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl group">
                <Image
                  src={ogUrl}
                  alt="Takumi Dynamic Generated OG Image"
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  unoptimized={true}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 px-1 pt-1">
                <span>Next.js Metadata Route:</span>
                <a
                  href="/opengraph-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline flex items-center gap-1"
                >
                  View /opengraph-image ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-bold">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white">Sub-Millisecond Speeds</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Powered by native Rust bindings (<code className="text-zinc-300">@takumi-rs/core</code>) for blistering fast server-side HTML/JSX to PNG canvas rendering.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-bold">
              🔄
            </div>
            <h3 className="text-lg font-bold text-white">Drop-in Replacement</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Seamlessly swap out <code className="text-zinc-300">@vercel/og</code> or Satori. Uses standard <code className="text-zinc-300">ImageResponse</code> with identical parameters.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-bold">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-white">Next.js 16 Native</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Supports both custom API route handlers (<code className="text-zinc-300">/og/route.tsx</code>) and Next.js built-in file convention (<code className="text-zinc-300">opengraph-image.tsx</code>).
            </p>
          </div>
        </section>

        {/* Code Snippets Section */}
        <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">
                Implementation Guide
              </h2>
              <p className="text-sm text-zinc-400">
                Explore how Takumi is integrated into Next.js 16 files
              </p>
            </div>

            {/* Tab selection */}
            <div className="flex items-center gap-2 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => setActiveTab("route")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${activeTab === "route"
                  ? "bg-orange-600 text-white shadow"
                  : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                app/og/route.tsx
              </button>
              <button
                onClick={() => setActiveTab("convention")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${activeTab === "convention"
                  ? "bg-orange-600 text-white shadow"
                  : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                app/opengraph-image.tsx
              </button>
            </div>
          </div>

          {activeTab === "route" ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-zinc-300">
                Dynamic API Route Handler for custom query parameters:
              </p>
              <pre className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-xs font-mono text-zinc-300 overflow-x-auto">
                {`import { ImageResponse } from "takumi-js/response";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Next.js 16 + Takumi";

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#09090b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: 64 }}>{title}</h1>
    </div>,
    { width: 1200, height: 630 }
  );
}`}
              </pre>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-zinc-300">
                Next.js Built-in OpenGraph Metadata File Convention:
              </p>
              <pre className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-xs font-mono text-zinc-300 overflow-x-auto">
                {`import { ImageResponse } from "takumi-js/response";

export const alt = "Next.js 16 + Takumi OG Image Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#09090b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: 64 }}>Takumi + Next.js 16</h1>
    </div>,
    { ...size }
  );
}`}
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

