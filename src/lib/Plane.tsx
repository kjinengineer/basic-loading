import { ReactNode } from "react";
import { lightenColor } from "./util/functions";

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
}

export default function Plane({
  option,
  className,
  style,
  children,
}: PropsType) {
  const { width, height, borderRadius, color } = option;

  const planeStyle = {
    ...style,
    backgroundColor: "#2b3131",
    background: `linear-gradient(to bottom right, ${lightenColor(
      color ?? "#232323",
      15
    )}, ${color ?? "#232323"})`,
    width: width,
    height: height,
    borderRadius: borderRadius ?? "10px",
    boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.3),
        2px 2px 8px rgba(0, 0, 0, 0.2)`,
  };

  return (
    <div className={className} style={planeStyle}>
      {children}
    </div>
  );
}
