import { Col, Row } from "antd/es/grid";

const Header = () => {
    return(
        <>
            <Row style={{backgroundColor:"#0c2461"}}>
                <Col span={2} >
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sri_Lanka_Police_logo.svg/1200px-Sri_Lanka_Police_logo.svg.png" style={{margin:"10px 0 10px 30px", height:"80%", width:"65%"}} />
                </Col>
                <Col span={22}>
                    <div style={{margin:"3.2% 0 0 2%" , color:"#ffff" , fontWeight:"bold" , fontSize:"30px"}}>SRI LANKA POLICE</div>
                </Col>
                
            </Row>
        </>
    );
}

export default Header;