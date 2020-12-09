import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};

export default Button;
