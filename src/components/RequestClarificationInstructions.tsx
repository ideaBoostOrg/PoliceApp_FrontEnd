import '../css/requestClarificationInstructions.scss';
import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Button, Breadcrumb, UploadProps, Upload, Modal, message, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import { InboxOutlined } from '@ant-design/icons';

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

    const handleClick = () => {
        console.log(active)
        setActive(!active);
    }

    function showDeleteConfirm(key: any): void {
    confirm({
        title: 'Are you sure you want to edit these records?',
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
                <Card title={<Title level={4}>Update Request</Title>} bordered={false} style={{width: "70%",marginLeft:"15%"}}>
                    <Row style={{marginBottom:"20px"}}>
                        <Col span={24}>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload(NIC Copy)</p>
                                <p className="ant-upload-hint">
                                Re submit NIC copy
                                    
                                </p>
                            </Dragger>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload(Passport Copy)</p>
                                <p className="ant-upload-hint">
                                Re submit passport copy
                                    
                                </p>
                            </Dragger>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2}>
                            <Title level={5}><p>Verify Name : </p></Title>
                        </Col>
                        <Col span={22}>
                            <Input style={{marginTop:"25px"}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2}>
                            <Title level={5}><p>Date of Birth : </p></Title>
                        </Col>
                        <Col span={22}>
                            <DatePicker style={{marginTop:"22px"}} size="middle"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            
                        </Col>
                        <Col span={8}>
                            
                        </Col>
                        <Col span={8} style={{display: "flex" , justifyContent:"right",alignContent:"end"}}>
                            <Button type="primary" onClick={showDeleteConfirm}>Submit</Button>
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

export default RequestClarificationInstructions;





