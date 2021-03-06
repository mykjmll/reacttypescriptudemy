import { MouseEvent } from "react";

export type ButtonType = "primary" | "default";

export interface ButtonProps {
  className?: string;
  selected: boolean;
  type?: ButtonType;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}