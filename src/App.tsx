import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Instructions from './instructions'
import ApplicationStatusCheck from './applicationStatusCheck';
import RequestClarificationInstructions from './requestClarificationInstructions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Instructions/>}/>
        <Route path="/statusCheck" element = {<ApplicationStatusCheck/>}/>
        <Route path="/requestClarificationInstructions" element = {<RequestClarificationInstructions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
