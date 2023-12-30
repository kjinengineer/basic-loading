type StringObject = {
  [key: string]: string;
};

interface Datatype {
  option: {
    width: string;
    height: string;
    speed?: number;
    color1?: string;
    color2?: string;
    borderRadius?: string;
  };
  className?: string;
  style?: StringObject;
}

export default function Skeleton({ option, className, style }: Datatype) {
  const { width, height } = option;

  const speed = option.speed || 1;
  const borderRadius = option.borderRadius || "20px";
  const color1 = option.color1 || "#EAEAEA";
  const color2 = option.color2 || "#D7D7D7";

  const skeletonKeyframes = `
  @keyframes skeletonAnimation {
            0%, 100% {
              background-color: ${color1};
            }
        
            50% {
              background-color: ${color2};
            }
    }
        `;

  const skeleton = {
    ...style,
    width: width,
    height: height,
    borderRadius: borderRadius,
    animation: `skeletonAnimation ${speed}s ease-in-out infinite`,
  };

  return (
    <>
      <style>{skeletonKeyframes}</style>
      <div style={skeleton} className={className}></div>
    </>
  );
}
