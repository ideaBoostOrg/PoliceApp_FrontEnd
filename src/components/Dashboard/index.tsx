import React, { FC } from 'react';
import Services from "./Services";
import { Card } from "antd";
import { Row } from "antd";
import Footer from '../Footer';
import Title from "antd/es/typography/Title";

const Dashboard: FC = () => {
  return (
    <>
      <div className="dashboard-header">
        <h2 className='home-header'>Welcome to the Police Clearance Certificate Issuance e-Service Online Application</h2>
        <p className="instruction-text">Online Clearance Issuance System is another remarkable step taken by Sri Lanka Police to enhance people friendly professional service</p>
      </div>

      <Card title={<h1 className='header'>Our Services</h1>} bordered={false} className="dashboard-card">
        <Services />
      </Card>
    </>
  );
};

export default Dashboard;
