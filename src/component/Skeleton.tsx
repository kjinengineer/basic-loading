import React from "react";

interface Datatype {
  option: {
    width: string;
    height: string;
    speed: number;
    color?: string;
    borderRadius?: string;
  };
  className?: string;
  style?: any;
}

function Skeleton({ option, className, style }: Datatype) {
  const { width, height, speed, borderRadius, color } = option;
  const skeletonKeyframes = `
  @keyframes skeletonAnimation {
            0%, 100% {
              background-color: ${color ?? "#000000"}10;
            }
        
            50% {
              background-color: ${color ?? "#000000"}18;
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

export function SkeletonExample() {
  const option1 = {
    width: "70px",
    height: "70px",
    speed: 1,
    borderRadius: "50%",
  };

  const option2 = {
    width: "150px",
    height: "20px",
    speed: 1,
    borderRadius: "7px",
  };

  const option3 = {
    width: "90px",
    height: "20px",
    speed: 1,
    borderRadius: "7px",
  };

  const option4 = {
    width: "300px",
    height: "100px",
    speed: 1,
    borderRadius: "10px",
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Skeleton option={option1} style={{ marginRight: "10px" }} />
        <div>
          <Skeleton option={option2} style={{ marginBottom: "6px" }} />
          <Skeleton option={option3} />
        </div>
      </div>
      <Skeleton option={option4} style={{ marginTop: "15px" }} />
    </div>
  );
}

export function SkeletonSample() {
  const skeletonOption1 = {
    width: "100px",
    height: "100px",
    speed: 1,
    borderRadius: "20px",
  };

  return <Skeleton option={skeletonOption1} className="mx-2" />;
}
