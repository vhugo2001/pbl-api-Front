import React from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./Components/NavBar/Bar";
import Routes from "./routes/routes";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
        <Routes />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
