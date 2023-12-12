interface Datatype {
  option: {
    size: number;
    color: string;
    timing: string;
    count: number | string;
  };
}

export default function DotBounce({ option }: Datatype) {
  const size = 15;
  const color = "black";
  const timing = "ease-in-out";
  const count = "infinite";
  const keyframe = ` 
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
      <style>{keyframe}</style>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `loading 1s ${timing} ${count}`,
            animationDelay: "0s",
            margin: size / 3.5,
          }}
        ></div>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `loading 1s ${timing} ${count}`,
            animationDelay: "0.25s",
            margin: size / 3.5,
          }}
        ></div>
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            animation: `loading 1s ${timing} ${count}`,
            animationDelay: "0.5s",
            margin: size / 3.5,
          }}
        ></div>
      </div>
    </>
  );
}
