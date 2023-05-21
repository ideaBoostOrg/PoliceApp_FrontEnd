import React, { FC } from "react";
import {BrowserRouter as Router, Routes, Route, HashRouter, Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import "./assests/styles/main.scss"
import logo from './logo.svg';
import './App.css';
import Instructions from './instructions'
import ApplicationStatusCheck from './applicationStatusCheck';
import RequestClarificationInstructions from './requestClarificationInstructions';

const App: FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element = {<Instructions/>}/>
        <Route path="/statusCheck" element = {<ApplicationStatusCheck/>}/>
        <Route path="/requestClarificationInstructions" element = {<RequestClarificationInstructions/>}/>
        <Route  path="/" element={<Dashboard/>} />
              <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
