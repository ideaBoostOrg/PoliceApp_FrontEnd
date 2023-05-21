import React from "react";
import { Breadcrumb, Button, Col, Row, Typography , Card, Input } from 'antd';
import Title from "antd/es/typography/Title";
import Header from './header'

const ApplicationStatusCheck = () => {
    return(
        <>
        <Header/>
        {/* <Row>
            <Col span={6}>
            <Title level={5} style={{marginLeft:"60%"}}>Application Status</Title>
            </Col>
            <Col span={6}>
                
            </Col>
            <Col span={6}>
                
            </Col>
            <Col span={4}>
                <Title level={5}>Maneth Wijethunga | <span style={{color:"blue"}}>Logout</span></Title>
            </Col>
            
        </Row> */}
        
        <Card bordered={false} style={{ width: "70%" , marginLeft:"15%" , marginTop:"30px", marginBottom:"30px"}}>
            <Row>
                <Col span={6}>
                    <Title style={{marginLeft:"30%", marginTop:"19px"}} level={5}>
                        Application Status
                    </Title>
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col span={6}>
                    <Title level={5} style={{ marginTop:"15px"}}>
                        Maneth Wijethunga | <span style={{color:"blue"}}>Log Out</span>
                    </Title>
                </Col>
            </Row>
        </Card>
        <Card bordered={false} style={{width: "70%",marginLeft:"15%"}}>
            <Row style={{marginBottom:"30px"}}>
                <Col span={24}>
                    <div>Please enter the Application Reference Number to view status of your application</div>
                </Col>
            </Row>
            {/* <Row>
                <Col span={4}>

                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4} style={{marginRight:"0px"}}>
                <div style={{fontSize:"18px" , fontWeight:"unset"}}>Reference Number:<span style={{color:"red"}}>*</span></div>
                </Col>
                <Col span={4} style={{marginLeft:"0px"}}>
                    <Input style={{width:"100%"}}/>
                </Col>
                <Col span={4} style={{marginLeft:"10px"}}>
                    <Button>Submit</Button>
                </Col>
                <Col span={4}>
                    
                </Col>
            </Row> */}
            <Row>
                <Col span={3}></Col>
                <Col span={5}style={{marginRight:"0px"}}>
                    <div style={{fontSize:"18px" , fontWeight:"unset"}}>Application Reference Number: <span style={{color:"red"}}>*</span></div>
                </Col>
                <Col span={10}>
                    <Input style={{width:"100%"}}/>
                </Col>
                <Col span={3} style={{marginLeft:"10px"}}>
                    <Button onClick={() => console.log("Clicked!!!!!!!")}>Submit</Button>
                </Col>
                <Col span={3}></Col>
            </Row>
            
            
        </Card>

        <div id="result-card" style={{display:"none"}}>
            <Card  bordered={false} style={{width: "70%",marginLeft:"15%"}}>

            </Card>
        </div>
        
            
        </>
    );
}

export default ApplicationStatusCheck;