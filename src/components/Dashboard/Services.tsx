
import React, { FC } from 'react';
import {Button, Card, Col, Row} from 'antd';

const Services: FC = () => {
    return (
        <div>
            <Card title="Card title">
                <Card type="inner"  className="custom-card">
                    <Row>
                    <Col span={20}>
                    <p>Apply online for clearance certificates.</p>
                    </Col>
                    <Col span={4}>
                    <Button  className="card-btn">Apply</Button>
                    </Col>
                    </Row>
                </Card>
                <Card type="inner"  className="custom-card">
                    <Row>
                        <Col span={20}>
                            <p>Apply online for clearance certificates.</p>
                        </Col>
                        <Col span={4}>
                            <Button  className="card-btn">Apply</Button>
                        </Col>
                    </Row>
                </Card>
                <Card type="inner"  className="custom-card">
                    <Row>
                        <Col span={20}>
                            <p>Apply online for clearance certificates.</p>
                        </Col>
                        <Col span={4}>
                            <Button  className="card-btn">Apply</Button>
                        </Col>
                    </Row>
                </Card>
                <Card type="inner"  className="custom-card">
                    <Row>
                        <Col span={20}>
                            <p>Apply online for clearance certificates.</p>
                        </Col>
                        <Col span={4}>
                            <Button  className="card-btn">Apply</Button>
                        </Col>
                    </Row>
                </Card>
            </Card>

        </div>
    );
    };

export default Services;
