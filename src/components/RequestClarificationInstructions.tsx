import '../css/requestClarificationInstructions.scss';
import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Button, Breadcrumb, UploadProps, Upload, Modal, message, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { UploadOutlined } from '@ant-design/icons';

const { Item } = Form;
const { Dragger } = Upload;
const { confirm } = Modal;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

const RequestClarificationInstructions = () => {
    const [active, setActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
      };
     
      const validateInput = () => {
        if (inputValue) {
            //database operations
            console.log('Input value:', inputValue);
          } else {
            alert('Please enter a value');
          }
      }  

    const handleClick = () => {
        validateInput()
        console.log(active)
        setActive(!active);
    }

    function showDeleteConfirm(key: any): void {
    confirm({
        title: 'Are you sure you want to Edit the modifiied records?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          handleEdit(key);
        },
      });
    }

    function handleEdit(key: any) {
        console.log("Clicked!!")
    }

  return (
    <div className="container">
        <Card className="dashboard-card" title={<h1 className="header">Instructions</h1>} bordered={false}>
        <Row>
            <Col lg={ { span: 12 } } md={ { span: 24 } } sm={ { span: 24 } } xs={{span: 24}}>
                <Breadcrumb className='breadcrumbCurrentStatus' items=
                {[
                    { title: <Link to="/">Home</Link> },
                    { title: <span className="breadcrumbCurrent">Request for Clarification</span> },
                    ]}
                />
            </Col>
        </Row>
        <Row>
        <Col lg={ { span: 24 } } md={ { span: 24 } } sm={ { span: 24 } } xs={{span: 24}}>
                
                <Row>
                    <Col span={24}>
                        <p className='instruction-text'>
                        <div>
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
                        </p>
                    </Col>
                </Row>
                
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
                <Card className="dashboard-card"  title={<Title level={4}>Update Request</Title>} bordered={false}>
                    

                    {/* <Row gutter={[16, 16]}>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><b>Resubmit NIC:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8}>
                            <p className='bottom-card-text'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><b>Resubmit Passport:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8}>
                            <p className='bottom-card-text'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                                
                            </p>
                        </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <p className="instruction-text"><b>Verify Name:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8}>
                            <p className='bottom-card-text'>
                                <Form onFinish={onFinish}>
                                    <Item name="name" rules={[{message: 'Please enter the Updated Name' }]}>
                                        <Input  placeholder="Enter the Updated Name"  />
                                    </Item>
                                </Form>
                            </p>
                        </Col>
                        
                        <Col xs={12} sm={12} md={12} lg={4}>
                        <p className="instruction-text"><b>Verify DOB:</b></p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8}>
                            <p className='bottom-card-text'>
                                    <Form onFinish={onFinish}>
                                        <Item  name="dob" >
                                            <DatePicker style={{width:'100%'}} size="middle"/>
                                        </Item>
                                    </Form>
                            </p>
                        </Col>
                    </Row>
                        
                    
                    <Row>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                            
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                
                            </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <div className="submit-container">
                                    
                                    <Button onClick={showDeleteConfirm} className="card-btn" htmlType="submit">Update</Button>
                                               
                                </div>
                            </Col>
                    </Row> */}

                    <Form onFinish={onFinish}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Item
                                label="Verify Name"
                                name="verifyName"
                                rules={[{ required: false, message: 'Please enter the Verified Name' }]}
                            >
                                <Input placeholder="Verified Name" />
                            </Item>
                            </Col>
                            
                        </Row>
                        {/* <Row gutter={[16, 16]} align="middle">
                            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                <Item
                                    label="Resubmit NIC"
                                    name="resbumitNIC"
                                    rules={[{ required: false}]}
                                >
                                     <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                <Item
                                    label="Resubmit Passport"
                                    name="resbumitPassport"
                                    rules={[{ required: false}]}
                                >
                                     <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                            <Item
                                label="DOB"
                                name="dob"
                                rules={[{ required: false, message: 'Please enter the DOB' }]}
                            >
                                <DatePicker style={{width:'50%'}} size="middle"/>
                            </Item>
                            </Col>
                                
                        </Row> */}

                        <Row gutter={[96, 16]} align="middle">
                            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                            <Item
                                    label="Resubmit NIC"
                                    name="resbumitNIC"
                                    rules={[{ required: false}]}
                                >
                                     <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                            <Item
                                    label="Resubmit Passport"
                                    name="resbumitPassport"
                                    rules={[{ required: false}]}
                                >
                                     <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                            <Item
                                label="DOB"
                                name="dob"
                                rules={[{ required: false, message: 'Please enter the DOB' }]}
                            >
                                <DatePicker style={{width:'70%'}} size="middle"/>
                            </Item>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                        
                                    </Col>
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <div className="submit-container">
                                            
                                            <Button onClick={showDeleteConfirm} className="card-btn" htmlType="submit">Update</Button>
                                                    
                                        </div>
                                    </Col>
                        </Row>
                    </Form>
                    
                    
                    
                    
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

export default RequestClarificationInstructions;





