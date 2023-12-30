interface Datatype {
  option: {
    size: number;
    bgColor?: string;
    barColor?: string;
    thickness?: number;
  };
  children?: React.ReactNode;
}

export default function Spinner({ option, children }: Datatype) {
  const { size } = option;
  const bgColor = option.bgColor || "#0271a1";
  const barColor = option.barColor || "#BAD5E8";
  const thickness = option.thickness || 7;

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
          width: size,
          height: size,
          border: `${thickness}px solid ${barColor}`,
          borderBottomColor: bgColor,
          borderRadius: "50%",
          animation: "spin 1.5s linear infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
