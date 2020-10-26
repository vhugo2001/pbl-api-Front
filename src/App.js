import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/Toolbar/Navbar";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import "../src/pages/home/style.scss";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "./Services/AuthService";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  const [isLogado, setIsLogado] = useState(false);

  useEffect(() => {
    // console.log('entrou' + AuthHeader());
    // let teste = AuthHeader();
    // console.log('entrou' + teste);
    if(AuthService.getCurrentUser())
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
            <NavBar />
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
