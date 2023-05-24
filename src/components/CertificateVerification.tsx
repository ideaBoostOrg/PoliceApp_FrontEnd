import React, {FC} from "react";
import {Breadcrumb, Button, Card, Checkbox, Form, Input} from 'antd';
import Title from "antd/es/typography/Title";
import {Col, Row} from "antd/es/grid";
import {Link} from "react-router-dom";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const CertificateVerification = () => {
    return (
        <>
            <Card title={<h1 className="header">Clearance certificate verification
            </h1>} bordered={false}
                  style={{width: "60%", marginLeft: "20%", marginTop: "18px"}}>

                <Row>
                    <Col span={24}>
                        <Breadcrumb
                            items={[
                                {
                                    title: <Link to="/">Home</Link>,
                                },
                                {
                                    
                                    title: (
                                        <span className="breadcrumbCurrent">
                                            Certificate Verification
                                        </span>
                                    ),
                                },
                            ]}/>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <div style={{fontSize: "15px", margin: "10px 0px 10px 0px"}}>Please enter the following details
                            to verify an issued clearance certificate:
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col span={24}>
                        <Card style={{border:"none", width:"65%",margin:"auto",height:"88%"}}>
                            <Form
                                name="basic"
                                labelCol={{span: 8}}
                                wrapperCol={{span: 16}}
                                style={{maxWidth: 600}}
                                initialValues={{remember: true}}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="NIC No:"
                                    labelAlign="left"
                                    name="NICNo"
                                    rules={[{required: true, message: 'Please input your NIC No!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Passport No:"
                                    labelAlign="left"

                                    name="PassportNo"
                                    rules={[{required: true, message: 'Please input your Passport No!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Certificate No:"
                                    labelAlign="left"

                                    name="CertificateNo"
                                    rules={[{required: true, message: 'Please input your Certification No!'}]}
                                >
                                    <Input/>
                                </Form.Item>


                                <Form.Item wrapperCol={{offset: 20, span: 16}}>
                                    <Button className="card-btn" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>

                    </Col>
                </Row>

            </Card>


        </>
    )

}
export default CertificateVerification;
