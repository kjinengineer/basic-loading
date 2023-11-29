import { ReactNode } from "react";
import { lightenColor } from "../util/functions";

type StringObject = {
  [key: string]: string;
};

interface PropsType {
  option: {
    width: string;
    height: string;
    borderRadius?: string;
    color?: string;
  };
  className?: string;
  style?: StringObject;
  children?: ReactNode;
  id?: string;
}

export default function Plane({
  id,
  option,
  className,
  style,
  children,
}: PropsType) {
  const { width, height, borderRadius, color } = option;

  return (
    <div
      id={id}
      className={className}
      style={{
        ...style,
        width: width,
        height: height,
        background: color
          ? `linear-gradient(to bottom right, ${lightenColor(
              color ?? "#232323",
              6
            )}, 7%, ${color ?? "#232323"})`
          : "",
        borderRadius: borderRadius ?? "10px",
        boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.3),
          3px 3px 8px rgba(0, 0, 0, 0.1)`,
      }}
    >
      {children}
    </div>
  );
}
