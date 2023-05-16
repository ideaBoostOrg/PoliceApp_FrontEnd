import React, { FC } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


const App: FC = () => {
  return (
    <div>
      <Home/>
    <Router location={''} navigator={undefined}>
      
        <Routes>
          <Route  path="/" Component={Home} />
          <Route  path="/about" Component={About} />

        </Routes>
      
    </Router>
    </div>
    
  );
};

export default App;
