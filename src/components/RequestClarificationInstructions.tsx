import React, { useState } from "react";
import { Breadcrumb, Button, Col, Row, Typography , Card, Input, Upload, UploadProps, message, DatePicker, Modal } from 'antd';
import Title from "antd/es/typography/Title";
import Header from './Header'
import { InboxOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

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


const RequestClarificationInstructions = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        console.log(active)
        setActive(!active);
    }

    function showDeleteConfirm(key: any): void {
    confirm({
        title: 'Are you sure you want to delete this record?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          handleDelete(key);
        },
      });
    }

    function handleDelete(key: any) {
        console.log("Clicked!!")
    }

    return(
        <>
        <div style={{backgroundColor:"#F5F5F5"}}>
        <Card title={<h1 className="header">Instructions</h1>} bordered={false} style={{ width: "70%" , marginLeft:"15%" , marginTop:"18px"}}>
            <div>
                {/* <Row>
                    <Col span={24}><Title level={1}>Instructions</Title></Col>
                </Row> */}
                <Row>
                    <Col span={24}>
                        <Breadcrumb
                        items={[
                        {
                            title: <Link to="/">Home</Link>,
                        },
                        {
                            title:<span className="breadcrumbCurrent">Request for Clarification</span> ,
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
                    <Link to='/editApplication'>
                    <Button onClick={handleClick} style={{ backgroundColor: active ? "white" : "blue" , color : active ? "black" : "white"}}>Submit</Button>
                    </Link>
                    
                </Col>
                <Col span={3}></Col>
            </Row>
            </div>
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
        
            
        </>
    );
}

export default RequestClarificationInstructions;

