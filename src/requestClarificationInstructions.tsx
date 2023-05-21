import React from "react";
import { Breadcrumb, Button, Col, Row, Typography , Card, Input } from 'antd';
import Title from "antd/es/typography/Title";
import Header from './header'

const RequestClarificationInstructions = () => {
    return(
        <>
        <Header/>
        <div style={{backgroundColor:"#F5F5F5"}}>
        <Card title={<Title level={1}>Instructions</Title>} bordered={false} style={{ width: "60%" , marginLeft:"20%" , marginTop:"18px"}}>
            <div>
                {/* <Row>
                    <Col span={24}><Title level={1}>Instructions</Title></Col>
                </Row> */}
                <Row>
                    <Col span={24}>
                        <Breadcrumb
                        items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: 'Request for Clarification',
                        },
                        ]}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div style={{fontSize:"15px" , margin:"10px 0px 10px 0px"}}>In order to update following information please enter your Application Reference Number:</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div style={{lineHeight:"150%" , fontSize:"15px"}}>
                            <ul>
                                <li>
                                    Re submit NIC copy
                                </li>
                                <li>
                                    Re submit passport copy 
                                </li>
                                <li>
                                    Verify Name
                                </li>
                                <li>
                                    Verify Date of Birth
                                </li>
                            </ul>
                            
                            <br/>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    <Col span={8}>
                        
                    </Col>
                    <Col span={8}>
                        <div style={{textAlign:"center" , marginTop : "20px"}}>
                        <Button style={{backgroundColor:"#1E33EE" , color:"#ffff" , width:"200px", height:"40px" , fontWeight:"bold"}}>Proceed</Button>
                        </div>
                        
                    </Col>
                    <Col span={8}>
                        
                    </Col>
                </Row> */}
                <Row>
                <Col span={2}></Col>
                <Col span={6}style={{marginRight:"0px"}}>
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
            </div>
        </Card>
        </div>
            
        </>
    );
}

export default RequestClarificationInstructions;