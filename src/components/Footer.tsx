/* eslint-disable jsx-a11y/alt-text */
import { Col, Row } from "antd/es/grid";
import '../../src/assests/styles/partials/Footer.scss'

const Footer = () => {
    return (
        <>
            <Row className="footer" >
                <Col span={24}>Powered by 2023 ideaboost</Col>
            </Row>
        </>
    );
}

export default Footer;