import React, {FC} from 'react';
import Services from "./Services";
import {Card} from "antd";
import Title from "antd/es/typography/Title";

const Dashboard: FC = () => {
    return (
        <>
            <div style={{ marginLeft:"15%" }}>
                <h2 >Welcome to the Police Clearance Certificate Issuance e-Service Online Application</h2>
                <p>online Clearance Issuance System Is another remarkable step taken by Sri Lanka Police to enhance people
                    friendly professional service</p>
            </div>

            <Card title={<Title level={2}>Our Services</Title>} bordered={false} style={{ width: "70%" , marginLeft:"15%" , marginTop:"18px"}} >

                <Services/>
            </Card>
        </>
    );
};

export default Dashboard;
