import React from "react";
import { BrowserRouter } from "react-router-dom";
import Bar from "./Components/NavBar/Bar";
import { ToastContainer} from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Bar />
      </BrowserRouter>
    </>
  );
}

export default App;
