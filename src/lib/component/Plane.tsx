import { PropsType } from "../util/type";

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
        backgroundColor: color ?? "#232323",
        // background: color
        //   ? `linear-gradient(to bottom right, ${lightenColor(
        //       color ?? "#232323",
        //       6
        //     )}, 7%, ${color ?? "#232323"})`
        //   : "",
        borderRadius: borderRadius ?? "20%",
        boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.3),
          3px 3px 8px rgba(0, 0, 0, 0.1)`,
      }}
    >
      {children}
    </div>
  );
}
