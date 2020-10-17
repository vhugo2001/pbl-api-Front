import React from "react";
import { BrowserRouter } from "react-router-dom";
import Bar from "./Components/NavBar/Bar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
      </BrowserRouter>
    </>
  );
}

export default App;
