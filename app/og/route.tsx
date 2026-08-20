import { ImageResponse } from "takumi-js/response";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Next.js 16 + Takumi";
  const subtitle =
    searchParams.get("subtitle") ||
    "High-performance server-side OG image rendering powered by Rust";
  const theme = searchParams.get("theme") || "dark";
  const tag = searchParams.get("tag") || "Takumi Engine";

  // Theme styles presets
  let bgGradient = "linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)";
  let titleColor = "#ffffff";
  let subtitleColor = "#a1a1aa";
  let badgeBg = "rgba(249, 115, 22, 0.15)";
  let badgeBorder = "rgba(249, 115, 22, 0.4)";
  let badgeText = "#f97316";
  let accentBorder = "linear-gradient(90deg, #f97316, #ea580c, #dc2626)";

  if (theme === "gradient") {
    bgGradient = "linear-gradient(135deg, #fff7ed 0%, #ffedd5 40%, #fed7aa 100%)";
    titleColor = "#0c0a09";
    subtitleColor = "#57534e";
    badgeBg = "rgba(234, 88, 12, 0.12)";
    badgeBorder = "rgba(234, 88, 12, 0.3)";
    badgeText = "#c2410c";
    accentBorder = "linear-gradient(90deg, #ea580c, #f97316, #fb923c)";
  } else if (theme === "sunset") {
    bgGradient = "linear-gradient(135deg, #2e1065 0%, #581c87 50%, #831843 100%)";
    titleColor = "#ffffff";
    subtitleColor = "#e9d5ff";
    badgeBg = "rgba(236, 72, 153, 0.2)";
    badgeBorder = "rgba(236, 72, 153, 0.5)";
    badgeText = "#f472b6";
    accentBorder = "linear-gradient(90deg, #c084fc, #f472b6, #fb7185)";
  } else if (theme === "ocean") {
    bgGradient = "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #0f766e 100%)";
    titleColor = "#ffffff";
    subtitleColor = "#99f6e4";
    badgeBg = "rgba(45, 212, 191, 0.2)";
    badgeBorder = "rgba(45, 212, 191, 0.5)";
    badgeText = "#2dd4bf";
    accentBorder = "linear-gradient(90deg, #2dd4bf, #38bdf8, #818cf8)";
  } else if (theme === "neon") {
    bgGradient = "linear-gradient(135deg, #050505 0%, #0f172a 60%, #1e1b4b 100%)";
    titleColor = "#ffffff";
    subtitleColor = "#cbd5e1";
    badgeBg = "rgba(56, 189, 248, 0.2)";
    badgeBorder = "rgba(56, 189, 248, 0.5)";
    badgeText = "#38bdf8";
    accentBorder = "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)";
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: bgGradient,
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
          background: accentBorder,
        }}
      />

      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: badgeBg,
            border: `1px solid ${badgeBorder}`,
            padding: "8px 18px",
            borderRadius: "9999px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: badgeText,
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: badgeText,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </span>
        </div>

        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: subtitleColor,
            opacity: 0.8,
          }}
        >
          takumi-js/response
        </span>
      </div>

      {/* Main Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: titleColor,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: 0,
            display: "flex",
            overflow: "hidden",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "26px",
            fontWeight: 400,
            color: subtitleColor,
            lineHeight: 1.4,
            margin: 0,
            maxWidth: "950px",
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Footer Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "24px",
          borderTop: `1px solid ${subtitleColor}33`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: badgeText,
            }}
          >
            Takumi
          </span>
          <span style={{ fontSize: "20px", color: subtitleColor }}>+</span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: titleColor,
            }}
          >
            Next.js 16
          </span>
        </div>

        <span
          style={{
            fontSize: "18px",
            color: subtitleColor,
            fontWeight: 500,
          }}
        >
          Sub-millisecond Rust Engine
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}

