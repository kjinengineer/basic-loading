interface Datatype {
  option: {
    size: number;
    color?: string;
  };
}

const BounceDot = ({ option }: Datatype) => {
  const { size } = option;
  const color = option.color || "#0271a1";

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
          // data-testid="dot1"
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
          // data-testid="dot2"
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
          // data-testid="dot3"
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
};
export default BounceDot;
