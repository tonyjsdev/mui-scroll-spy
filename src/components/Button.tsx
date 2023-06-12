import React, { CSSProperties } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { ScrollLink } from "react-scroll";

export interface ButtonProps extends MuiButtonProps {
  /* style applied when element is reached */
  activeStyle?: CSSProperties;
  /* Target to scroll to */
  to: string;
  /* Scroll additional px ( like padding ) */
  offset?: number;
  /* time of the scroll animation */
  duration?: number;
  /* Make Link selected when scroll is at its targets position   */
  spy?: boolean;
  /* Animate the scrolling */
  smooth?: boolean;
}

const Button = (props: ButtonProps) => {
  return <MuiButton {...props} />;
};

export default ScrollLink(Button);
