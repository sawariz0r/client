import { PureComponent } from "react";
import React, { memo } from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default memo(function Button(props: ButtonProps) {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
});
