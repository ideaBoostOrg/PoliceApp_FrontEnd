
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
                    <p><Button type="primary" >Apply</Button></p>
                    </Col>
                    </Row>
                </Card>
                <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Inner Card title"
                    extra={<a href="#">More</a>}
                >
                    Inner Card content
                </Card>
            </Card>

        </div>
    );
    };

export default Services;
