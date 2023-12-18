interface Datatype {
  option: {
    size: number;
    color: string;
  };
}

export default function BounceDot({ option }: Datatype) {
  const { size, color } = option;
  const animation = ` 
        @keyframes loading {
          0%, 
          100% {
            opacity: 1;
            transform: scale(1); 
          }
          50% {
            opacity: 0.3;
            transform: scale(0.5);
          }
        }
        `;

  return (
    <>
      <style>{animation}</style>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `loading 1s ease-in-out infinite`,
            animationDelay: "0s",
            margin: size / 2.5,
          }}
        ></div>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `loading 1s ease-in-out infinite`,
            animationDelay: "0.25s",
            margin: size / 2.5,
          }}
        ></div>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `loading 1s ease-in-out infinite`,
            animationDelay: "0.5s",
            margin: size / 2.5,
          }}
        ></div>
      </div>
    </>
  );
}
