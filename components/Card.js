import { Container, Row, Col,Button } from 'reactstrap'
import ReactTooltip from "react-tooltip";

// import location from '../public/location.png'
const Card = () => {
    return <div>
        <Container>
            <Row style={{background: "#FFFFFF 0% 0% no-repeat padding-box",
                        boxShadow: "3px 5px 6px #00000045",
                        borderRadius: "10px",
                        opacity: '1'}}>
            <Col xs lg="2" style={{background: "#FE6F21 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    opacity: "1"}}></Col>
            <Col>
            <Row style={{paddingLeft:'1%'}}>
                <Col style={{font: "Light 24px/28px Span",
                            letterSpacing: "0px",
                            color: "#130D0D",
                            opacity: "1"}}>Market Lane Coffee</Col>
                <Col style={{font: "Regular 16px/19px Josefin Sans",
                            letterSpacing: "0px",
                            color: "#130D0D",
                            opacity: "1"}}><img src="/location.png" style={{padding:'10px'}}></img>Brunswick East</Col>
            </Row>
            <Row style={{paddingLeft:'1%'}}>
                <Col>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Col>
                <Col  xs lg="2">
                    <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "top",
                                    display: "inline-block",
                                    textAlign: "center",
                                    opacity: "1",marginRight:'50%',paddingBottom:'10%',paddingTop:'10%',paddingRight:'10%',paddingLeft:'10%'}}>
                                            <img style ={{display:"block", margin:"0 auto"}} src="/orangecolour.png" data-tip="Add to Orange Pick"></img>
                                            <ReactTooltip backgroundColor="silver"/>

                        
                    </Row>
                    <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "top",
                                    display: "inline-block",
                                    textAlign: "center",
                                    opacity: "1",marginRight:'50%',marginTop:'10%',marginBottom:'10%',paddingBottom:'10%',paddingTop:'10%',paddingRight:'10%',paddingLeft:'10%'}}>
                                            <img style ={{display:"block", margin:"0 auto"}} src="/boatcolour.png"></img>
                                            <p style = {{display:"block", margin:"0 auto"}}>
                            232
                        </p>
                               
                    </Row>
                    
                        
                    
                </Col>
            </Row>
            </Col>
            </Row>
        </Container>
        </div>
   }
   export default Card