import { useState } from "react";
import { lightenColor } from "../lib/util/functions";

export default function Button() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const defaultStyle = `
    .plane:hover {
      cursor: pointer;
    }
    `;

  return (
    <div>
      <style>{defaultStyle}</style>
      <div
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        <div
          className="plane"
          style={{
            width: "100px",
            height: "100px",
            background: `linear-gradient(to bottom right, ${lightenColor(
              "#232323",
              10
            )}, #232323)`,
            borderRadius: "20%",
            boxShadow: `inset 2px 2px 8px ${
              isMouseDown ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.3)"
            }`,
          }}
        ></div>
      </div>
    </div>
  );
}
