import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ClearanceCertificateApplication from './components/ClearanceCertificateApplication';
import EditApplication from './components/EditApplication';


const App: FC = () => {
  return (
    <div>
    <Router>
      
        <Routes>
          <Route  path="/" Component={Home} />
          <Route  path="/about" Component={About} />
          <Route path="/certificateApplication" Component={ClearanceCertificateApplication} />
          <Route path="/editApplication" Component={EditApplication} />

        </Routes>
      
    </Router>
    </div>
    
  );
};

export default App;
