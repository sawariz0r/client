import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./Main.scss";

import Calculator from "../../components/Calculator/Calculator";

interface MainProps {
  path?: string;
}

export interface IPayload {
  mass: number | "";
  length: number | "";
}

type IStatus = "ready" | "loading" | "done";

function App(props: MainProps) {
  const [status, setStatus] = useState<IStatus>("ready");
  const [result, setResult] = useState<string>("");
  const [payload, setPayload] = useState<IPayload>({
    mass: "",
    length: "",
  });

  const handleSend = () => {
    console.log(payload);
    setStatus("loading");

    axios
      .post("/tree", payload)
      .then((res) => {
        if (res.status === 200) {
          setStatus("done");
          setResult(res.data.treeData);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const reset = () => {
    setPayload({ mass: "", length: "" });
    setStatus("ready");
    setResult("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {status !== "done" && (
          <p>
            Super advanced tree-calculator! <br />
            Runs the most efficient algorithms on one of the worlds most well
            written servers in the world of localhost
          </p>
        )}
        <Calculator
          status={status}
          onInputChange={handleChange}
          inputValue={payload}
          onSubmit={handleSend}
          result={result}
          reset={reset}
        />
      </header>
    </div>
  );

  return null;
}

export default App;
