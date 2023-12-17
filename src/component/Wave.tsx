interface Datatype {
  option: {
    height: number;
    color: string;
  };
}

export default function Wave({ option }: Datatype) {
  const { height, color } = option;
  const width = height * 0.15;
  const margin = height * 0.1;
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
            height: height,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 0.3s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 0.6s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 0.9s linear infinite",
          }}
        ></div>
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: color,
            margin: margin,
            animation: "wave 1.2s 1.2s linear infinite",
          }}
        ></div>
      </div>
    </>
  );
}
