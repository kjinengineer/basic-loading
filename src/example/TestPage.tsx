import { Plane } from "../lib";
import Triangle from "../lib/component/Triangle";
import Button from "./Button";

export default function TestPage() {
  const option = {
    width: "100px",
    height: "100px",
    // color: "#818cf8",
  };
  return (
    <div>
      {/* <Plane option={option} />
      <Triangle option={option} /> */}
      <Button />
    </div>
  );
}
