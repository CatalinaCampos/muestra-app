import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
