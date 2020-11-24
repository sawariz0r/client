import React from "react";
import { IPayload } from "../../pages/Main/Main";
import Button from "../Button/Button";
import Input from "../Input/Input";
import loading from "./loading.svg";

interface Props {
  status: "ready" | "loading" | "done";
  inputValue: IPayload;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  result: string;
  reset: () => void;
}

const Calculator = (props: Props) => {
  const { status, onInputChange, inputValue, onSubmit, result, reset } = props;

  if (status === "done")
    return (
      <>
        <span>
          Estimated amount of chicken nuggets you can fit in this tree:
        </span>
        <p>{result}</p>
        <Button text="Run another" onClick={reset} />
      </>
    );

  if (status === "loading")
    return <img width="50px" src={loading} alt="loading" />;

  if (status === "ready")
    return (
      <>
        <Input
          type="number"
          placeholder="tree length in m"
          name="length"
          onChange={onInputChange}
          value={inputValue.length}
        />
        <Input
          type="number"
          placeholder="tree mass in m2"
          name="mass"
          onChange={onInputChange}
          value={inputValue.mass}
        />
        <Button text="Calculate" onClick={onSubmit} />
      </>
    );

  return null;
};

export default Calculator;
