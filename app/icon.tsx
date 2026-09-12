import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#111113",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fd6f00",
          fontWeight: 900,
          borderRadius: 7,
          border: "1.5px solid #fd6f00",
        }}
      >
        I
      </div>
    ),
    {
      ...size,
    }
  );
}
