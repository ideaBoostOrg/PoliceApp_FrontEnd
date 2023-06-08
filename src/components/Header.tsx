/* eslint-disable jsx-a11y/alt-text */
import { Col, Row } from "antd/es/grid";

const Header = () => {
    return (
        <>
            <Row className="navbar">
                <Col lg={{span:2}}  xs={{span:4}}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sri_Lanka_Police_logo.svg/1200px-Sri_Lanka_Police_logo.svg.png" className="logo" />
                </Col>
                <Col lg={{span:22}} xs={{span:20}}>
                    <div className="header">SRI LANKA POLICE</div>
                </Col>

            </Row>
        </>
    );
}

export default Header;