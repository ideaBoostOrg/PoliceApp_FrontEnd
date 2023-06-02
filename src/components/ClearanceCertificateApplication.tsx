import '../css/ClearanceCertificateApplication.scss'
import {
    Button,
    Card,
    Checkbox,
    Col,
    DatePicker,
    Form,
    Input,
    Breadcrumb,
    Row,
    Select,
} from 'antd';
import React, { useState } from 'react';
import Title from "antd/es/typography/Title";

const { Option } = Select;

const nationalities = [
    'Sri Lankan',
    'American',
    'British',
    'Canadian',
    'Chinese',
    'French',
    // Add more nationalities as needed
];

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Bangladesh',
    'Fiji',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Zimbabwe',
    // Add more countries as needed
];


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
    exampleCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        offset: 8, // Adjust the offset as needed
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 20,
        },
    },
};

const ClearanceCertificateApplication: React.FC = () => {
    const [form] = Form.useForm();

    const [showOtherDropdown, setShowOtherDropdown] = useState(false);

    const handleFirstDropdownChange = (value: string) => {
        setShowOtherDropdown(value === 'renew');
    };

    const handleFirstDropdownChange2 = (value: string) => {
        setShowOtherDropdown(value === 'yes');
    };

    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    // };

    // const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    // const onWebsiteChange = (value: string) => {
    //     if (!value) {
    //         setAutoCompleteResult([]);
    //     } else {
    //         setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    //     }
    // };

    // const websiteOptions = autoCompleteResult.map((website) => ({
    //     label: website,
    //     value: website,
    // }));

    const validateNumber = (_: any, value: string) => {
        if (!value || /^\d+$/.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject('Please enter only numbers.');
    };

    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <Card title={<Title level={1}>Application</Title>} bordered={false} style={{ width: "70%", marginLeft: "15%", marginTop: "18px" }}>
                    <div>
                        <Row>
                            <Col lg={{ span: 24 }} sm={{ span: 24 }}>
                                <Breadcrumb
                                    items={[
                                        {
                                            title: 'Home',
                                        },
                                        {
                                            title: 'Clearance certificate instructions',
                                        },
                                        {
                                            title: 'Clearance certificate application',
                                        },
                                    ]} />
                            </Col>
                            {/* <Col lg={{ span: 6 }} xs={{ span: 24 }} style={{ alignItems: 'end' }}>
                                <p>
                                    Maneth Wijethunga | <span>Log Out</span>
                                </p>
                            </Col> */}
                        </Row>

                        <Row>
                            <Col span={24}>
                                <div style={{ fontSize: "15px", margin: "10px 0px 10px 0px" }}>
                                    <ul>
                                        <li>If you need to get an extended clearance certificate for a previously approved one, then please select renewal.</li>
                                        <li>The clearance period has to be same as the previous certificate.</li>
                                        <li>A new certificate for the same period but for a different country also can be obtained through the renewal.</li>
                                        <li>Application charges are applicable.</li>
                                        <li>An application can be renewed within one year from the date the clearance certificate was issued.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form
                                    className='application-form'
                                    {...formItemLayout}
                                    form={form}
                                    name="register"
                                    style={{ maxWidth: 900 }}
                                    layout="vertical"
                                    labelCol={{ span: 24 }}
                                >

                                    <Form.Item
                                        name="applicationType"
                                        label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Application Type</span>}
                                        rules={[{ message: 'Please select application type' }]}
                                    >
                                        <Select onChange={handleFirstDropdownChange} placeholder="Select application type">
                                            <Option value="new">New Application</Option>
                                            <Option value="renew">Renewal</Option>
                                        </Select>
                                    </Form.Item>

                                    {showOtherDropdown && (
                                        <Form.Item
                                            name="age"
                                            label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Previous Application Reference No</span>}
                                            rules={[
                                                {
                                                    required: false,
                                                }
                                            ]}
                                        >
                                            <Row>
                                                <Col lg={{ span: 10 }} sm={{ span: 24 }}>
                                                    <Input style={{ width: "100%" }} />
                                                </Col>
                                                <Col lg={{ span: 3 }} sm={{ span: 24 }} style={{ marginLeft: "10px" }} >
                                                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#eeefef', color: 'black', border: '1px solid black' }}>
                                                        Load
                                                    </Button>
                                                </Col>
                                                <Col span={3}></Col>
                                            </Row>
                                        </Form.Item>
                                    )}

                                    <hr
                                        style={{
                                            borderTop: 5
                                        }}
                                    />

                                    <Form.Item
                                        name="nationality"
                                        label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Nationality</span>}
                                        rules={[{ required: true, message: 'Please select nationality' }]}
                                    >
                                        <Select placeholder="Please select">
                                            {nationalities.map((nationality, index) => (
                                                <Option key={index} value={nationality}>
                                                    {nationality}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>


                                    <Row>
                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="citizenship"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Citizen of Sri Lanka?</span>}
                                                rules={[{ required: true, message: 'Please select' }]}
                                            >
                                                <Select onChange={handleFirstDropdownChange2} placeholder="Please select">
                                                    <Option value="yes">Yes</Option>
                                                    <Option value="no">No</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>


                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>

                                            {showOtherDropdown && (
                                                <Form.Item
                                                    label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Citizenship obtained date</span>}
                                                    rules={[{ required: true, message: 'Please select' }]}
                                                >
                                                    <DatePicker />
                                                </Form.Item>
                                            )}
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="bitrthdate"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Date Of Birth</span>}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your birthdate',
                                                    }
                                                ]}>
                                                <DatePicker />
                                            </Form.Item>
                                        </Col>


                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="age"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Age in years</span>}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your age',
                                                    },
                                                    { validator: validateNumber }
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="leaving"
                                        label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Did you leave Sri Lanka before the age 16 ?</span>}
                                        rules={[{
                                            required: true,
                                            message: 'Please select'
                                        }]}
                                    >
                                        <Select placeholder="Please select">
                                            <Option value="yes">Yes</Option>
                                            <Option value="no">No</Option>
                                        </Select>
                                    </Form.Item>

                                    <hr
                                        style={{
                                            borderTop: 1
                                        }}
                                    />

                                    <Row>
                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="refNum"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Reference No</span>}
                                                rules={[
                                                    {
                                                        required: false,
                                                    }
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>


                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <p style={{ color: '#FF6D6D' }}>***<b style={{ color: '#000000' }}>Application with incorrect NIC Number and Passport Number will be rejected.</b></p>
                                        <p>Please have your NIC and Passport scanned before you start filling in your application. Enter your NIC number and Passport number to verify if an application is already in process under your name.</p>
                                    </Row>


                                    <Row>
                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="nic"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>NIC No</span>}
                                                rules={[
                                                    {
                                                        required: true
                                                    }
                                                ]}
                                            >

                                                <Input />
                                            </Form.Item>
                                        </Col>


                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="confirmNic"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Confirm NIC No</span>}
                                                dependencies={['nic']}
                                                rules={[
                                                    {
                                                        required: true
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('nic') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The two nic numbers that you entered do not match!'));
                                                        },
                                                    }),
                                                ]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="passport"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Passport No</span>}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input passport number',
                                                    }
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>


                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="confirmPassport"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Confirm Passport No</span>}
                                                dependencies={['passport']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input passport number',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('passport') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The two passport numbers that you entered do not match!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="newNic"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>New NIC No</span>}
                                                rules={[
                                                    {
                                                        required: true
                                                    }
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>


                                        <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                            <Form.Item
                                                name="confirmNewNic"
                                                label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Confirm New NIC No</span>}
                                                dependencies={['newNic']}
                                                rules={[
                                                    {
                                                        required: true
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('newNic') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="country"
                                        label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Country</span>}
                                        rules={[{ required: true, message: 'Please select country' }]}
                                    >
                                        <Select placeholder="select country">
                                            {countries.map((country, index) => (
                                                <Option key={index} value={country}>
                                                    {country}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>


                                    <Form.Item
                                        name="consulateName"
                                        label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>High Commission/Embassy/Consulate Name (Adressee & the Name of the Authority)</span>}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please fill',
                                            },
                                        ]}
                                    >
                                        <span style={{ fontSize: '12px', color: '#888888' }}>"e.g. H. E. THE HIGH COMMISSIONER, SRI LANKAN HIGH COMMISSION"</span>
                                        <Input />
                                    </Form.Item>


                                    <Form.Item
                                        name="addressTo"
                                        label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Indicate address of the High Commission/Embassy/Consulate to which the certificate should be addressed to</span>}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please fill',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>


                                    <Form.Item label={<span style={{ fontSize: '12px', fontWeight: 'bold' }}>Captcha</span>} extra="We must make sure that your are a human.">
                                        <Row gutter={8}>
                                            <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                                <Form.Item
                                                    name="captcha"
                                                    noStyle
                                                    rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col lg={{ span: 12 }} sm={{ span: 24 }}>
                                                <Button>Get captcha</Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>

                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                            },
                                        ]}
                                    // {...tailFormItemLayout}
                                    >
                                        <Checkbox>
                                            I have read the <a href="#">agreement</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                    <p>You can submit another application for the same country only when your previous application is processed</p>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>

        </>
    );
};

export default ClearanceCertificateApplication;