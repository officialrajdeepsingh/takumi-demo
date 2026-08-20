import { ImageResponse } from "takumi-js/response";

export const alt = "Next.js 16 + Takumi OG Image Generator";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#09090b",
        padding: "60px 70px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Top Accent Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #ea580c, #f97316, #fb923c)",
        }}
      />

      {/* Ambient background accent light */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(9,9,11,0) 70%)",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(249, 115, 22, 0.15)",
            border: "1px solid rgba(249, 115, 22, 0.4)",
            padding: "8px 18px",
            borderRadius: "9999px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#f97316",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#f97316",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Metadata File Convention
          </span>
        </div>

        <span
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#71717a",
          }}
        >
          app/opengraph-image.tsx
        </span>
      </div>

      {/* Body Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "auto",
          marginBottom: "auto",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#f97316",
              letterSpacing: "-0.03em",
            }}
          >
            Takumi
          </span>
          <span style={{ fontSize: "44px", color: "#52525b", fontWeight: 300 }}>+</span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            Next.js 16
          </span>
        </div>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: "#f4f4f5",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Lightning-Fast Dynamic OG Image Generator
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Drop-in `@vercel/og` replacement powered by high-performance Rust core bindings.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "24px",
          borderTop: "1px solid #27272a",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: "18px",
            color: "#a1a1aa",
            fontWeight: 500,
          }}
        >
          takumi-js v2.10.0
        </span>
        <span
          style={{
            fontSize: "18px",
            color: "#f97316",
            fontWeight: 600,
          }}
        >
          Sub-millisecond Rust Canvas Rendering
        </span>
      </div>
    </div>,
    {
      ...size,
    }
  );
}

