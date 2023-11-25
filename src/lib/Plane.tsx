import { ReactNode } from "react";

interface PropsType {
  option: {
    width: string;
    height: string;
    borderRadius: string;
    backgroundColor?: string;
  };
  className?: string;
  children?: ReactNode;
}

export default function Plane({ option, className, children }: PropsType) {
  const { width, height, borderRadius } = option;

  const style = {
    backgroundColor: "#2b3131",
    width: width,
    height: height,
    borderRadius: borderRadius,
    boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.3),
        2px 2px 8px rgba(0, 0, 0, 0.2)`,
  };

  return (
    <div id="plane" className={className} style={style}>
      {children}
    </div>
  );
}
