import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "../Contact/cont";
import About from "../About/about";
import Try from "../Try/try";
import Features from "../Features/feat";
import Blog from "../Blog/blog";
import Home from "../Home/home";



function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/try" component={Try}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/features" component={Features}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/blog" component={Blog}></Route>
      
      
    </Switch>
  </Router>
  );
}

export default App;
