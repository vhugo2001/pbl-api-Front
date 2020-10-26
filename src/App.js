import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Bar from "./Components/NavBar/Bar";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import "../src/pages/home/style.scss";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AuthHeader from "./Services/AuthHeader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [isLogado, setIsLogado] = useState(false);

  useEffect(() => {
    if(AuthHeader() !== {})
    setIsLogado(true);
  }, [])

  function HomeScreen() {
    if (!isLogado) {
      return <> 
      <ToastContainer />
      <Home setIsLogado={setIsLogado}/>
      </>;
    } else {
      return (
        <>
          <ToastContainer />
          <BrowserRouter>
            <Bar />
          </BrowserRouter>
        </>
      );
    }
  }

  return (
    <>
      <Router>
        <HomeScreen />
        <Switch>
          <Route exact path="/"/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
