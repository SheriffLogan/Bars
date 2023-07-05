import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./pages/Navbar";
import Navbar2 from "./pages/Navbar2";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";


const App = ()=> 
{
  return(

    <>
    <Router>
      <Navbar/>
      <Navbar2/>
      
      <Sidebar/>
      <Routes>
        <Route exact path ="/" element= {<Home/>}></Route>
        <Route exact path = "/Signup" element= {<Signup/>}></Route>
        {/* <Route exact path = "/Login"><Login/></Route> */}
      </Routes>
    </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
