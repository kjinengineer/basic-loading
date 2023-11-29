import "../../example/test.css";
import { lightenColor } from "../util/functions";

export default function Triangle() {
  console.log(lightenColor("#818cf8", 6));
  return (
    <>
      <div className="triangle">
        <div className="tri-1"></div>
        <div className="tri-3"></div>
        <div className="tri-2"></div>
        {/* <div className="tri-center"></div> */}
      </div>
      {/* <div id="pool-container">
        <div id="side-step"></div>
        <div id="main-pool"></div>
      </div> */}
    </>
  );
}
