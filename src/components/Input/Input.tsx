import React from "react";
import "./Input.scss";

interface InputProps {
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  name?: string;
  value?: any;
}

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
