
import '../css/statusCheck.scss';
import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Button, Breadcrumb, Table} from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import Footer from './Footer';


const { Item } = Form;

const ApplicationStatusCheck = () => {
    const [active, setActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
      };
    
    const handleClick = () => {
        validateInput()
        console.log(active)
        setActive(!active);
        
    }  
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  const validateInput = () => {
    if (inputValue) {
        //database operations
        console.log('Input value:', inputValue);
      } else {
        alert('Please enter a value');
      }
  }
  

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
                <Input value={inputValue} onChange={handleInputChange} placeholder="Enter reference number"  />
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
          {active === true && inputValue ?  (
            
            <div id="result-card" style={{display:"flex" , marginTop : "30px"}}>
                <Card className="dashboard-card"  title={<Title level={4}>Current Status</Title>} bordered={false}>
                    
                    <Row gutter={[16, 16]}>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><b>Reference Number:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text">{inputValue}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><b>Submitted Date:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text">2023/03/31</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><b>Status:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><span style={{color:"red"}}>On Progress</span></p>
                        </Col>
                        
                    </Row>

                    {/* <Row gutter={[16, 16]} justify="center">
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <p style={{ textAlign: 'right' }} className="instruction-text"><b>Reference Number:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3}>
                            <p  className="instruction-text">{inputValue}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <p style={{ textAlign: 'right' }} className="instruction-text"><b>Submitted Date:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3}>
                            <p  className="instruction-text">2023/03/31</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3}>
                            <p style={{ textAlign: 'right' }} className="instruction-text"><b>Status:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <p  className="instruction-text"><span style={{color:"red"}}>On Progress</span></p>
                        </Col>
                        
                    </Row> */}
                    
                    
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
        <Row>
                <Footer/>
            </Row>
    </div>
    
  );
};

export default ApplicationStatusCheck;




