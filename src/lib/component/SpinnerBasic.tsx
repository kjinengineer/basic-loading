export default function SpinnerBasic() {
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
          border: "7px solid rgba(112, 112, 112, 0.3)",
          borderBottomColor: "black",
          borderRadius: "50%",
          animation: "spin 1.5s linear infinite",
        }}
      ></div>
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
