import { ImageResponse } from "next/og";

export const alt = "AgniGrow — Websites, Branding & Automation in Vaniyambadi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0b0807",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(255, 90, 31, 0.22) 0%, transparent 65%)",
          color: "#f4eee5",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "64px 80px",
          boxSizing: "border-box",
          border: "2px solid rgba(255, 90, 31, 0.3)",
        }}
      >
        {/* Top Badges */}
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
              gap: "10px",
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 90, 31, 0.12)",
              border: "1px solid rgba(255, 90, 31, 0.35)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#ff5a1f",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#ff5a1f",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Digital Agency • Vaniyambadi, TN
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "rgba(244, 238, 229, 0.5)",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            agnigrow.in
          </span>
        </div>

        {/* Center Brand Title & Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "88px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            <span>AGNIGROW</span>
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#ff541f",
                borderRadius: "4px",
                marginBottom: "4px",
              }}
            />
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "rgba(244, 238, 229, 0.85)",
              maxWidth: "850px",
              lineHeight: 1.3,
            }}
          >
            High-Converting Websites, Brand Identity & WhatsApp Automation
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(244, 238, 229, 0.12)",
              fontSize: "17px",
              fontWeight: 600,
              color: "#f4eee5",
            }}
          >
            ⚡ Next.js Performance &lt; 1.0s
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(244, 238, 229, 0.12)",
              fontSize: "17px",
              fontWeight: 600,
              color: "#f4eee5",
            }}
          >
            💬 WhatsApp CRM & Bots
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(244, 238, 229, 0.12)",
              fontSize: "17px",
              fontWeight: 600,
              color: "#f4eee5",
            }}
          >
            🛡️ 100% Source Code Ownership
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
