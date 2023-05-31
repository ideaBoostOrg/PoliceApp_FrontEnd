import React, { FC } from "react";
import { Breadcrumb, Button, Card, Form, Input, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const CertificateVerification: FC = () => {
  return (
    <>
      <Card title={<h1 className="header">Clearance certificate verification</h1>} bordered={false} className="dashboard-card">
        <Row>
          <Col span={24}>
            <Breadcrumb items={[
              { title: <Link to="/">Home</Link> },
              { title: <span className="breadcrumbCurrent">Certificate Verification</span> },
            ]} />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div style={{ fontSize: "15px", margin: "10px 0" }}>
              Please enter the following details to verify an issued clearance certificate:
            </div>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={{ span: 24 }} sm={{ span: 20 }} md={{ span: 16 }} lg={{ span: 12 }}>
            <Card style={{ border: "none" }}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="NIC No:"
                  labelAlign="left"
                  name="NICNo"
                  rules={[{ required: true, message: 'Please input your NIC No!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Passport No:"
                  labelAlign="left"
                  name="PassportNo"
                  rules={[{ required: true, message: 'Please input your Passport No!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Certificate No:"
                  labelAlign="left"
                  name="CertificateNo"
                  rules={[{ required: true, message: 'Please input your Certification No!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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
  );
};

export default CertificateVerification;
