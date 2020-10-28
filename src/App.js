import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from './Components/PrivatRouter/Router';
import { ToastContainer } from "react-toastify";
import NavBar from "./Components/NavBar/Toolbar/Navbar";
import Home from "./pages/home/index";

import "../src/pages/home/style.scss";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Home} />
          <PrivateRoute path="/admin" component={NavBar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
