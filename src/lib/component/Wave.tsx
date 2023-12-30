interface Datatype {
  option: {
    size: number;
    color?: string;
  };
}

export default function Wave({ option }: Datatype) {
  const { size } = option;
  const color = option.color || "#0271a1";

  const width = size * 0.15;
  const margin = size * 0.1;
  const animation = `
  @keyframes wave {
    0%, 100%{
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.5);
    }
  }
`;
  return (
    <>
      <style>{animation}</style>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: width,
            height: size,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: size,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 0.3s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: size,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 0.6s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: size,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 0.9s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: size,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 1.2s linear infinite",
          }}
        ></div>
      </div>
    </>
  );
}
