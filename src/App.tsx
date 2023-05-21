import React, { FC } from "react";
import {BrowserRouter as Router, Routes, Route, HashRouter, Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import "./assests/styles/main.scss"

const App: FC = () => {
  return (
    <div>
      <HashRouter basename='/' >

          <ul>
              <li><Link to="/">Dashbord</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          <Routes>
              <Route  path="/" element={<Dashboard/>} />
              <Route path="/about" element={<About />} />
          </Routes>


      </HashRouter>
    </div>
  );
};

export default App;
