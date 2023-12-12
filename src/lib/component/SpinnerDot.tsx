import React from "react";

export default function SpinnerDot() {
  const animation = `
    @keyframes spin {
      from{
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={{ position: "relative" }}>
      <style>{animation}</style>
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "3px solid #00000090",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          animation: "spin 2s linear infinite",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#000000",
            borderRadius: "50%",
            transform: "translateY(-6px)",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -45%)",
          fontSize: "12px",
        }}
      >
        LOADING
      </div>
    </div>
  );
}
