import { ImageResponse } from "takumi-js/response";

export const alt = "Next.js 16 + Takumi OG Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      tw="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-black p-12 text-white"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #09090b, #18181b)",
        color: "#ffffff",
      }}
    >
      <div
        tw="flex items-center gap-4 mb-6"
        style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}
      >
        <span
          tw="text-6xl font-bold text-orange-500"
          style={{ fontSize: 72, fontWeight: "bold", color: "#f97316" }}
        >
          Takumi
        </span>
        <span
          tw="text-5xl text-zinc-500"
          style={{ fontSize: 60, color: "#71717a" }}
        >
          +
        </span>
        <span
          tw="text-6xl font-bold text-white"
          style={{ fontSize: 72, fontWeight: "bold", color: "#ffffff" }}
        >
          Next.js 16
        </span>
      </div>

      <p
        tw="text-3xl text-zinc-400 text-center max-w-2xl"
        style={{ fontSize: 32, color: "#a1a1aa", textAlign: "center" }}
      >
        Automated OpenGraph Image Convention via opengraph-image.tsx
      </p>
    </div>,
    {
      ...size,
    }
  );
}
