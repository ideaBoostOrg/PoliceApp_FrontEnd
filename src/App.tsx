import React, { FC } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import "./assests/styles/main.scss"

const App: FC = () => {
  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
