import React from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./Components/NavBar/Bar";
import Routes from "./routes/routes";
// import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Bar />
          {/* <Routes />  */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
