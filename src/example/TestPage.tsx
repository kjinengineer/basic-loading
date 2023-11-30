import { Plane } from "../lib";
import Triangle from "../lib/component/Triangle";

export default function TestPage() {
  const option = {
    width: "100px",
    height: "100px",
    // color: "#818cf8",
  };
  return (
    <div>
      <Plane option={option} />
      <Triangle option={option} />
      {/* <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="borderRadius">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg> */}
    </div>
  );
}
