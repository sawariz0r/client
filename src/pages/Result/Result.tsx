import React, { useState } from "react";
import logo from "./logo.svg";
import "./Main.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

interface MainProps {
  path?: string;
}

interface IPayload {
  mass: number | "";
  length: number | "";
}

function App(props: MainProps) {
  const [file, setFile] = useState<any>("");
  const [payload, setPayload] = useState<IPayload>({
    mass: "",
    length: "",
  });

  const handleSend = () => {
    console.log(payload);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Super advanced tree-calculator! <br />
          Runs the most efficient algorithms on one of the worlds most well
          written servers in the world of localhost
        </p>
        <Input
          type="number"
          placeholder="length"
          name="length"
          onChange={handleChange}
          value={payload.length}
        />
        <Input
          type="number"
          placeholder="mass"
          name="mass"
          onChange={handleChange}
          value={payload.mass}
        />
        <Button text="Calculate" onClick={handleSend} />
      </header>
    </div>
  );
}

export default App;
