import DotBasic from "../lib/component/DotBasic";
import DotBounce from "../lib/component/DotBounce";
import Fade from "../lib/component/Fade";

export default function TestPage() {
  const option = {
    size: 15,
    color: "#232323",
  };

  return (
    <div>
      {/* <DotBasic option={option} /> */}
      {/* <DotBounce option={option} /> */}
      <Fade>hello</Fade>
    </div>
  );
}
