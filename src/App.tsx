import { Router } from "@reach/router";
import React from "react";

import Main from "./pages/Main/Main";
import History from "./components/atoms/History/History";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <History />
      <Router>
        <Main path="/" />
      </Router>
    </>
  );
};

export default App;
