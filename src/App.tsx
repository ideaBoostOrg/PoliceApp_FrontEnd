import React, {FC} from "react";
import {BrowserRouter as Router, Routes, Route, HashRouter, Link} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./assests/styles/main.scss"
import logo from './assests/images/logo.svg';
import './assests/styles/App.css';
import Instructions from './components/Instructions'
import ApplicationStatusCheck from './components/ApplicationStatusCheck';
import RequestClarificationInstructions from './components/RequestClarificationInstructions';
import Header from "./components/Header";
import CertificateVerification from "./components/CertificateVerification";            

import ClearanceCertificateApplication from './components/ClearanceCertificateApplication';
import EditApplication from './components/EditApplication';


const App: FC = () => {
  return (
    <div>
      <Header/>
    <Router>
      
       
          

                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/instructions" element={<Instructions/>}/>
                    <Route path="/statusCheck" element={<ApplicationStatusCheck/>}/>
                    <Route path="/requestClarificationInstructions" element={<RequestClarificationInstructions/>}/>
                    <Route path="/certificateVerification" element={<CertificateVerification/>}/>
                    
          <Route path="/certificateApplication" Component={ClearanceCertificateApplication} />
          <Route path="/editApplication" Component={EditApplication} />
                </Routes>
                

</Router>
        </div>

    );
};

const AppWithRouter = () => {
    return (

            <HashRouter>
                <App />
            </HashRouter>

    );
};
export default AppWithRouter;

