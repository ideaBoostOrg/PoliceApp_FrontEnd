import React, { FC } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

const Services: FC = () => {
  return (
    <>
      <Card type="inner" className="custom-card">
        <Row>
          <Col xs={24} lg={20}>
            <p>Apply online for clearance certificates.</p>
          </Col>
          <Col xs={24} lg={4}>
            <Link to="/instructions">
              <Button className="card-btn">Apply</Button>
            </Link>
          </Col>
        </Row>
      </Card>
      <Card type="inner" className="custom-card">
        <Row>
          <Col xs={24} lg={20}>
            <p>View application status.</p>
          </Col>
          <Col xs={24} lg={4}>
            <Link to="/statusCheck">
              <Button className="card-btn">View</Button>
            </Link>
          </Col>
        </Row>
      </Card>
      <Card type="inner" className="custom-card">
        <Row>
          <Col xs={24} lg={20}>
            <p>Request for clarification.</p>
          </Col>
          <Col xs={24} lg={4}>
            <Link to="/requestClarificationInstructions">
              <Button className="card-btn">Request</Button>
            </Link>
          </Col>
        </Row>
      </Card>
      <Card type="inner" className="custom-card">
        <Row>
          <Col xs={24} lg={20}>
            <p>Verify an issued clearance certificate</p>
          </Col>
          <Col xs={24} lg={4}>
            <Link to="/certificateVerification">
              <Button className="card-btn">Verify</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Services;
