import React from "react";
import {
  BasicDot,
  BounceDot,
  Fade,
  ProgressBar,
  Pulse,
  Skeleton,
  Spinner,
  Wave,
} from "./lib";

export default function App() {
  const option = {
    size: 50,
    // color: "blue",
  };
  const fade = {
    speed: 2,
    // color: "blue",
  };
  const bar = {
    width: 200,
    // color: "blue",
  };
  const skeleton = {
    width: "200px",
    height: "200px",
    // color1: "blue",
  };
  return (
    <div>
      {/* <BounceDot option={option} /> */}
      {/* <ProgressBar option={bar} /> */}
      {/* <Pulse option={option}>로딩..</Pulse> */}
      <Skeleton option={skeleton} />
      <Spinner option={option} />
      <Wave option={option} />
      {/* <Fade option={fade}>hello</Fade> */}
    </div>
  );
}
