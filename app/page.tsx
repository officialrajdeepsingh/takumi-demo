import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 font-sans p-8">
      <main className="flex flex-col items-center max-w-3xl w-full gap-8 bg-white dark:bg-zinc-900 p-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <span className="text-2xl font-bold text-zinc-400">+</span>
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            Takumi
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 text-center">
          Next.js 16 + Takumi Image Generator
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-lg">
          High-performance server-side image rendering engine powered by Rust bindings (`@takumi-rs/core`) and drop-in `ImageResponse`.
        </p>

        <div className="w-full flex flex-col items-center gap-4 mt-2">
          <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            Live Generated Image Endpoint (/og)
          </div>
          <div className="w-full overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/og?title=Next.js%2016%20%2B%20Takumi"
              alt="Takumi Generated OG Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href="/og?title=Custom%20Title%20Demo"
            target="_blank"
            className="flex h-11 items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-700 px-6 text-sm font-medium text-white transition-colors"
          >
            View /og Image Endpoint
          </a>
          <a
            href="https://takumi.kane.tw/docs/integration/nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Takumi Next.js Docs
          </a>
        </div>
      </main>
    </div>
  );
}
