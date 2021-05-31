// import logo from './logo.svg';
// import './App.css';
import React from "react"
import {Switch ,Route, BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav"

import Login from "./components/Login"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Aboutus from "./components/Aboutus"
import Contactus from "./components/Contactus"
import Form from "./components/Form"



function App() {
  return (
  
    // use these brackets to render multiple components
    <BrowserRouter> 
   <Nav />
   
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/login" component={Login} />
   <Route exact path="/Signup" component={Signup} />
   <Route exact path="/Aboutus" component={Aboutus} />
   <Route exact path="/Contactus" component={Contactus} />
   <Route exact path="/Form" component={Form} />
   </Switch>
   
    </BrowserRouter>
  );
}

export default App;
