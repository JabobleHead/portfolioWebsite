import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0D",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 8, background: "#E0555F" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, color: "#F5F5F4", letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 16, fontSize: 40, color: "#E0555F" }}>{site.tagline}</div>
        </div>

        <div style={{ fontSize: 28, color: "#A8A29E" }}>
          Database development · Applied AI/ML · Full-stack engineering
        </div>
      </div>
    ),
    size,
  );
}
