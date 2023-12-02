import { PropsType } from "../util/type";
// import "../../example/test.css";

export default function Triangle({
  id,
  option,
  className,
  style,
  children,
}: PropsType) {
  const { width, height, borderRadius, color } = option;
  const triangleStyle = `
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${width};
    height: ${height};
    transform: translate(-25%, -25%);
  }

  .top {
    position: absolute;
    background-color: ${color ?? "#232323"};
    width: calc(100% / 2);
    height: calc(100% / 2);
    border-top-right-radius: ${borderRadius ?? "20%"};
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.865);
    box-shadow: inset 2px 2px 8px rgba(255, 255, 255, 0.3);
  }
  
  .right {
    position: absolute;
    background-color: ${color ?? "#232323"};
    width: calc(100% / 2);
    height: calc(100% / 2);
    border-top-right-radius: ${borderRadius ?? "20%"};
    transform: rotate(60deg) skewX(-30deg) scale(1, 0.865) translate(50%, 0%);
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.3);
  }
  
  .left {
    position: absolute;
    background-color: ${color ?? "#232323"};
    width: calc(100% / 2);
    height: calc(100% / 2);
    border-bottom-left-radius: ${borderRadius ?? "20%"};
    box-shadow: inset 2px 2px 8px rgba(255, 255, 255, 0.3);
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 0%);
    transform: rotate(0deg) skewX(-30deg) scale(1, 0.865) translate(0%, 50%);
  }
  
  .center {
    position: absolute;
    background-color: ${color ?? "#232323"};
    width: calc(100% / 2);
    height: calc(100% / 2);
    border-top-right-radius: ${borderRadius};
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.865);
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 0% 0%);
  }

  .mid-left {
    position: absolute;
    width: calc(100% / 2);
    height: calc(100% / 2);
    transform: rotate(-60deg) scale(1, 0.865) translate(-22%, 0%);
    box-shadow: inset 2px 2px 8px rgba(255, 255, 255, 0.3);
    clip-path: polygon(20% 0%, 20% 50%, 80% 50%, 80% 0%);
    background-color: ${color ?? "#232323"};
  }
  
  .mid-right {
    position: absolute;
    width: calc(100% / 2);
    height: calc(100% / 2);
    transform: rotate(60deg) scale(1, 0.865) translate(22%, 0%);
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.3);
    clip-path: polygon(20% 0%, 20% 50%, 80% 50%, 80% 0%);
    background-color: ${color ?? "#232323"};
  }
  
  .mid-bottom {
    position: absolute;
    width: calc(100% / 2);
    height: calc(100% / 2);
    transform: rotate(0deg) scale(1, 0.865) translate(0%, 50%);
    box-shadow: inset 0px 2px 8px rgba(255, 255, 255, 0.3);
    clip-path: polygon(20% 100%, 20% 50%, 80% 50%, 80% 100%);
    background-color: ${color ?? "#232323"};
  }
  `;

  return (
    <>
      <style>{triangleStyle}</style>
      <div
        id={id}
        // className="triangle"
        className={className}
        style={{
          ...style,
          width: width,
          height: height,
          position: "relative",
          filter: "drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.1))",
        }}
      >
        <div className="container">
          {/* <div className="top"></div> */}
          {/* <div className="center"></div> */}
          <div className="left"></div>
          <div className="right"></div>
          {/* <div className="mid-left"></div>
          <div className="mid-right"></div>
          <div className="mid-bottom"></div> */}
        </div>
      </div>
      {/* <div id="pool-container">
        <div id="side-step"></div>
        <div id="main-pool"></div>
      </div> */}
    </>
  );
}
