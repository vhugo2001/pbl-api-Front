import React from "react";

// import Toolbar from "./Toolbar/Toolbar";
//import AppBar from "./AppBar/AppBar";
// import SideDrawer from "./Sidedrawer/SideDrawer";
// import Backdrop from "./Backdrop/Backdrop";
import NavBar from "./Toolbar/Navbar";

function Bar() {
  // const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  // const drawerToggleClickHandler = () => {
  //   setSideDrawerOpen(!sideDrawerOpen);
  // };

  // const backdropClickHandler = () => {
  //   setSideDrawerOpen(false);
  // };

  // let backdrop;

  // if (sideDrawerOpen) {
  //   backdrop = <Backdrop click={backdropClickHandler} />;
  // }

  return (
    // <div style={{ height: "100%" }} className="App">
    //   <Toolbar drawerClickHandler={drawerToggleClickHandler} />
    //   <SideDrawer show={sideDrawerOpen} />
    //   {backdrop}
    // </div>
    //<Toolbar />
    //<AppBar />
    <NavBar />
  );
}
export default Bar;
