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
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <input {...props} id={props.name} />
    </>
  );
};

export default Input;
