import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iftekhar Mahmud — CSE Student & Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111113",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(253, 111, 0, 0.28) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-100px",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, rgba(253, 111, 0, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#fd6f00",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: 800,
              }}
            >
              I
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              Iftekhar<span style={{ color: "#fd6f00" }}>.me</span>
            </span>
          </div>

          {/* Domain Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              background: "rgba(253, 111, 0, 0.12)",
              border: "1px solid rgba(253, 111, 0, 0.35)",
              color: "#fd6f00",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            iftekharmahmud.me
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            zIndex: 10,
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#a1a1aa",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 600,
            }}
          >
            Portfolio & Engineering Work
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Iftekhar Mahmud
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#fd6f00",
              lineHeight: 1.2,
            }}
          >
            CSE Student — World University of Bangladesh
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "#d4d4d8",
              maxWidth: "850px",
              lineHeight: 1.5,
              marginTop: "8px",
            }}
          >
            Specializing in C++, JavaScript, Next.js, and Software Engineering. Creator of Library De Kraken & Hackulator.
          </p>
        </div>

        {/* Bottom Badges */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            zIndex: 10,
          }}
        >
          {["C++ / OOP", "Data Structures", "Next.js & React", "JavaScript", "Software Dev"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "8px 18px",
                borderRadius: "8px",
                color: "#f4f4f5",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
