import React, {FC} from "react";
import {Breadcrumb, Button, Card, Checkbox, Form, Input} from 'antd';
import Title from "antd/es/typography/Title";
import {Col, Row} from "antd/es/grid";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const CertificateVerification = () => {
    return (
        <>
            <Card title={<Title level={1}>Clearance certificate verification
            </Title>} bordered={false}
                  style={{width: "60%", marginLeft: "20%", marginTop: "18px"}}>

                <Row>
                    <Col span={24}>
                        <Breadcrumb
                            items={[
                                {
                                    title: <a href="/">Home</a>,
                                },
                                {
                                    title: 'Certificate Verification',
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
                        <Card style={{backgroundColor:"#f0f0f0",width:"65%",margin:"auto",height:"88%"}}>
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
                                    label="NIC No:*"
                                    name="NICNo"
                                    rules={[{required: true, message: 'Please input your NIC No!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Passport No:*"
                                    name="PassportNo"
                                    rules={[{required: true, message: 'Please input your Passport No!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Certificate No:*"
                                    name="CertificateNo"
                                    rules={[{required: true, message: 'Please input your Certification No!'}]}
                                >
                                    <Input/>
                                </Form.Item>


                                <Form.Item wrapperCol={{offset: 20, span: 16}}>
                                    <Button type="primary" htmlType="submit">
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
