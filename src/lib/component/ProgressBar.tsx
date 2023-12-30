interface Datatype {
  option: {
    width: number;
    speed: number;
    bgColor?: string;
    barColor?: string;
  };
}

export default function ProgressBar({ option }: Datatype) {
  const { width, speed } = option;
  const height = width * 0.1;
  const afterWidth = width * 0.95;
  const afterHeight = height * 0.5;
  const margin = width * 0.025;

  const bgColor = option.bgColor || "#BAD5E8";
  const barColor = option.barColor || "#0271a1";

  const animation = `
    @keyframes progressbar {
      0% {
        width: 0%;
      }
      100% {
        width: 95%;
      }
    }
  `;
  return (
    <div>
      <style>{animation}</style>
      <div
        style={{
          position: "relative",
          backgroundColor: bgColor,
          width: width,
          height: height,
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: barColor,
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: margin,
            width: afterWidth,
            height: afterHeight,
            animation: `progressbar ${speed}s linear`,
          }}
        ></div>
      </div>
    </div>
  );
}
