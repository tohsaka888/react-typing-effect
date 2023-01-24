import { CSSProperties } from "react";

export type TypingProps = {
  children: string;
  interval: number;
  existTime: number;
  textStyle?: CSSProperties;
  symbolStyle?: CSSProperties;
  symbol?: React.ReactElement;
};
