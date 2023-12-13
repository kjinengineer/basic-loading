import { ReactNode } from "react";

type StringObject = {
  [key: string]: string;
};

export interface PropsType {
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
