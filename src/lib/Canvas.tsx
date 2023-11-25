import { ReactNode } from "react";

interface PropsType {
  children?: ReactNode;
  id?: string;
  className?: string;
}

export default function Canvas({ children, id, className }: PropsType) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}
