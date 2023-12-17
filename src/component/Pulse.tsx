interface Datatype {
  option: {
    size: number;
    color: string;
  };
  children?: React.ReactNode;
}

export default function Pulse({ option, children }: Datatype) {
  const { size, color } = option;
  const animation = `
  @keyframes pulse {
    0% {
      scale: 1;
      opacity: 0.5;
    }
    100% {
      scale: 1.8;
      opacity: 0;
    }
  }
`;
  return (
    <>
      <style>{animation}</style>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: size,
          height: size,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            animation: "pulse 1.5s ease-in-out infinite",
            backgroundColor: color,
          }}
        ></div>
        <div
          style={{
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: size,
            height: size,
            top: "50%",
            left: "50%",
            borderRadius: "50%",
            backgroundColor: color,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
