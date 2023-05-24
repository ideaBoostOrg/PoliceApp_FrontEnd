import React, {FC} from 'react';
import Services from "./Services";
import {Card} from "antd";
import Title from "antd/es/typography/Title";

const Dashboard: FC = () => {
    return (
        <>
            <div style={{ marginLeft:"15%" }}>
                <h2 >Welcome to the Police Clearance Certificate Issuance e-Service Online Application</h2>

                <p className='text'>Online Clearance Issuance System is another remarkable step taken by Sri Lanka Police to enhance people
                    friendly professional service</p>
            </div>

            <Card title={<h1 className='header'>Our Services</h1>} bordered={false} style={{ width: "70%" , marginLeft:"15%" , marginTop:"5px"}} >

                <Services/>
            </Card>
        </>
    );
};

export default Dashboard;
