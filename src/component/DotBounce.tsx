interface Datatype {
  option: {
    size: number;
    color: string;
  };
}

export default function DotBounce({ option }: Datatype) {
  const { size, color } = option;
  const delayList = [0, 0.25, 0.5];
  const keyframe = ` 
          @keyframes bounce {
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
        {delayList.map((delay, i) => (
          <div
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: color,
              animation: `bounce 1s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              margin: size / 3.5,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
