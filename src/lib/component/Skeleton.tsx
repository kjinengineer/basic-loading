type StringObject = {
  [key: string]: string;
};

interface Datatype {
  option: {
    width: string;
    height: string;
    speed: number;
    color: string[];
    borderRadius?: string;
  };
  className?: string;
  style?: StringObject;
}

export default function Skeleton({ option, className, style }: Datatype) {
  const { width, height, speed, borderRadius, color } = option;
  const skeletonKeyframes = `
  @keyframes skeletonAnimation {
            0%, 100% {
              background-color: ${color[0]};
            }
        
            50% {
              background-color: ${color[1]};
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
