import React, { ChangeEvent, useState } from "react";
import { Breadcrumb, Button, Col, Row, Typography , Card, Input } from 'antd';
import Title from "antd/es/typography/Title";
import Header from './Header'

const ApplicationStatusCheck = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        console.log(active)
        setActive(!active);
    }

    return(
        <>
        <Card title={<Title level={1}><span style={{color:"blue"}}>Application Status</span></Title>} bordered={false} style={{ width: "70%" , marginLeft:"15%" , marginTop:"18px"}}>
            <Row style={{marginBottom:"30px"}}>
                <Col span={24}>
                    <div style={{fontSize:"15px"}}>Please enter the Application Reference Number to view status of your application</div>
                </Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={5}style={{marginRight:"0px"}}>
                    <div style={{fontSize:"18px" , fontWeight:"unset"}}>Application Reference Number: <span style={{color:"red"}}>*</span></div>
                </Col>
                <Col span={10}>
                    <Input style={{width:"100%"}}/>
                </Col>
                <Col span={3} style={{marginLeft:"10px"}}>
                    <Button type="primary" onClick={handleClick} style={{ backgroundColor: active ? "white" : "blue" , color : active ? "black" : "white"}}>Submit</Button>
                </Col>
                <Col span={3}></Col>
            </Row>
            
        </Card>

        {active === true ? (
            <div id="result-card" style={{display:"flex" , marginTop : "30px"}}>
                <Card title={<Title level={4}>Current Status</Title>} bordered={false} style={{width: "70%",marginLeft:"15%"}}>
                    <Row>
                        <Col span={8}>
                            
                            <Card style={{marginRight:"10px", display:"flex", justifyContent:"center",alignItems:"center"}}><Title level={5}>Submitted Date : 2023/05/30</Title></Card>
                        </Col>
                        <Col span={8}>
                            
                            <Card style={{marginRight:"10px" , display:"flex", justifyContent:"center",alignItems:"center"}}><Title level={5}>Status : <span style={{color:"red"}}>On Progress</span></Title></Card>
                        </Col>
                        <Col span={8}>
                            
                            <Card style={{ display:"flex", justifyContent:"center",alignItems:"center"}}><Title level={5}>Reference Number : 20230531VW185</Title></Card>
                        </Col>
                    </Row>
                    
                    
                    
                    
                </Card>
            </div>
        ): (
            <div id="result-card" style={{display:"none" , marginTop : "30px"}}>
                <Card  bordered={false} style={{width: "70%",marginLeft:"15%"}}>
                    <Title level={5}>Error!!</Title>
                </Card>
            </div>
        )
        
        }
        
        
        
            
        </>
    );
}

export default ApplicationStatusCheck;