
import '../css/statusCheck.scss';
import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';

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
                        <Col xs={24} sm={24} md={8}>
                            
                            <Card   bordered={false} title={<Title level={5} ><p className='bottom-card-text'>Submitted Date</p></Title>}><p className='bottom-card-text'>2023/05/30</p></Card>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            
                            <Card  bordered={false} title={<Title level={5} ><p className='bottom-card-text'>Status</p></Title>}><p className='bottom-card-text'><span style={{color:"red"}}>On Progress</span></p></Card>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            
                            <Card  bordered={false}  title={<Title level={5} ><p className='bottom-card-text'>Reference Number</p></Title>}> <p className='bottom-card-text'> {inputValue}</p></Card>
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




