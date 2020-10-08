import React from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./Components/NavBar/Bar";
import Routes from "./routes/routes";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="page-container">
        <div className="footer-container">
          <BrowserRouter>
            <Bar />
            <Routes />
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
