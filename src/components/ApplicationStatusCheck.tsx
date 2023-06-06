
import '../css/statusCheck.scss';
import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';

const { Item } = Form;

const ApplicationStatusCheck = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        console.log(active)
        setActive(!active);
    }  
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="container">
        <Card className="dashboard-card" title={<h1 className="header">Application Status</h1>} bordered={false}>
        <Row>
            <Col lg={ { span: 12 } } md={ { span: 24 } } sm={ { span: 24 } } xs={{span: 24}}>
                <Breadcrumb className='breadcrumbCurrentStatus' items=
                {[
                    { title: <Link to="/">Home</Link> },
                    { title: <span className="breadcrumbCurrent">Application Status Check</span> },
                    ]}
                />
            </Col>
        </Row>
        <Row>
        <Col lg={ { span: 24 } } md={ { span: 24 } } sm={ { span: 24 } } xs={{span: 24}}>
                <p className="instruction-text">Please enter the Application Reference Number to view status of your application</p>
            </Col>
        </Row>
            <Form onFinish={onFinish}>
              <Item label="Reference Number" name="reference" rules={[{ required: true, message: 'Please enter the reference number' }]}>
                <Input placeholder="Enter reference number" />
              </Item>
            </Form>
            <Row justify="center">
                    <Col xs={6} sm={4} md={4} lg={3} xl={3}>
                        <div className="submit-container">
                            <Button onClick={handleClick} type="primary" htmlType="submit" className="submit-btn" block>Submit</Button>        
                        </div>
                    </Col>
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
    </div>
  );
};

export default ApplicationStatusCheck;




