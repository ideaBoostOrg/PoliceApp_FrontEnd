import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ClearanceCertificateApplication from './components/ClearanceCertificateApplication';


const App: FC = () => {
  return (
    <div>
    <Router>
      
        <Routes>
          <Route  path="/" Component={Home} />
          <Route  path="/about" Component={About} />
          <Route path="/certificateApplication" Component={ClearanceCertificateApplication} />

        </Routes>
      
    </Router>
    </div>
    
  );
};

export default App;
