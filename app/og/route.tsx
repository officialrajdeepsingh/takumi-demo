import { ImageResponse } from "takumi-js/response";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Hello Takumi";

  return new ImageResponse(
    <div
      tw="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-red-200 p-12 text-zinc-900"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #fff7ed, #fecaca)",
      }}
    >
      <h1
        tw="text-6xl font-bold tracking-tight text-zinc-900"
        style={{ fontSize: 72, fontWeight: "bold", color: "#18181b" }}
      >
        {title}
      </h1>
      <p
        tw="text-2xl mt-4 text-zinc-600"
        style={{ fontSize: 28, marginTop: 16, color: "#52525b" }}
      >
        Rendered with Takumi in Next.js 16
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
