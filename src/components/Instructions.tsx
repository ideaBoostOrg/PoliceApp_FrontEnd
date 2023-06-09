import React from 'react';
import { Row, Col, Card, Button, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import '../css/instructions.scss'
import Footer from "./Footer";

const Instructions = () => {
  return (
    <div>
      <Card className="dashboard-card" title={<h1 className="header">Instructions</h1>} bordered={false}>
        <Row>
          <Col span={24}>
          <Row>
                    <Col lg={ { span: 12 } } md={ { span: 24 } } sm={ { span: 24 } } xs={{span: 24}}>
                        <Breadcrumb items=
                        {[
                            { title: <Link to="/">Home</Link> },
                            { title: <span className="breadcrumbCurrent">Clearance Certificate Instructions</span> },
                          ]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div style={{lineHeight:"150%" , fontSize:"15px"}}>
                            <p className="instruction-text">
                            <ul>
                                <li>
                                    This allows you to apply for clearance certificates.
                                </li>
                                <li>
                                    Application Fee for a single application is 4000 Sri Lankan Ruppees and can be paid using VISA/Master/American Express/Ecash
                                </li>
                                <li>
                                    Please read the instructions given below carefully and validate before applying.
                                </li>
                                <li>
                                    When filling the clearance application form, please draw your attention for the following facts:
                                </li>
                            </ul>
                            <ol>
                                <li>
                                    Fill the name in English block letters in the application, according to the name mentioned in the National Identity Card.
                                </li>
                                <ul>
                                    <li>
                                    The Police clearance report will be issued only to the name mentioned in the National Identity Card.
                                    </li>
                                </ul>
                                <li>
                                If a different name is being used in the passport rather than the one mentioned in the National Identity Card, it should be written in the box named “Name in the passport”.
                                </li>
                                <li>
                                The duration of residence in Sri Lanka should only be included. (Except the period in abroad)
                                </li>
                                <ul>
                                    <li>
                                    The durations of residences should be mentioned correctly. (Year/Month/day)
                                    </li>
                                    <li>
                                    Residential addresses & the relevant Police areas should be mentioned correctly.
                                    </li>
                                </ul>
                                <li>
                                    <span style={{fontWeight:"bold"}}><span style={{color:"red"}}>***</span> <span style={{fontWeight:"bold"}}>Important:</span> - Providing accurate information on above will enable to issue the clearance certificate within 14 working days.</span>
                                </li>
                                <li>
                                Only a relation in Sri Lanka, whose name has been mentioned in the application which was fulfilled by the applicants in abroad, can be submitted to the office for accepting clearance applications, situated at Olcort Mawatha, Colombo 11.
                                </li>
                            </ol>
                            <br/>
                            <div><span style={{fontWeight:"bold" , marginLeft : "28px"}}>N.B.</span></div>
                            <ul>
                                <li>
                                Renew your National Identity Card if it is not clear.
                                </li>
                                <li>
                                Please kindly notice that the clearance report is issued by the Director Headquarters Administration, based on the background investigation reports of you
                                </li>
                                <ul>
                                    <li>
                                    The Police Clearance report is issued to officers in active service in Police, Tri forces, Civil Security force and coastal security force, only through the written permission of licensed officers.
                                    </li>
                                </ul>
                            </ul>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row justify="end">
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <div className="submit-container">
                            <Link to='/ClearanceCertificateApplication'>
                                <Button className="card-btn" htmlType="submit">Proceed</Button>
                            </Link>            
                        </div>
                    </Col>
                </Row>
          </Col>
        </Row>
        
      </Card>
      <Row>
                <Footer/>
            </Row>
    </div>
  );
};

export default Instructions;

