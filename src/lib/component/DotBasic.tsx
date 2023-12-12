interface Datatype {
  option: {
    size: number;
    color: string;
  };
}

export default function DotBasic({ option }: Datatype) {
  const { size, color } = option;
  const delayList = [0, 0.25, 0.5];

  const keyframe = ` 
          @keyframes loading {
            0%, 
            100% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
          }
          `;

  return (
    <>
      <style>{keyframe}</style>
      <div style={{ display: "flex" }}>
        {delayList.map((delay, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: color,
              animation: `loading 1s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              margin: size / 2.5,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
