
import React , {useState,useEffect} from 'react';
import { Container, Row, Col,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import dynamic from 'next/dynamic'
import Link from "next/link";

// import { Modal } from 'react-responsive-modal';
const DynamicComponent = dynamic(() => import('../components/Card'))
//const ModalExample = dynamic(()=>import('../components/Modal'))

function Index(props){
  const {
    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return(
    // border bottom
    <Container fluid>
    <Row style={{borderBottom: "5px solid #FFF1EA",marginLeft:'5%',marginRight:'5%',marginTop:'2%'}}>
      <Col sm style={{fontFamily:'Komu A',fontSize:'40px',fontWeight:'bold'}}>ORANGEPICK</Col>
      <Col sm ><p style={{  paddingTop:'5%',
                            textAlign: "center",
                            font: "Bold 16px/19px Josefin Sans",
                            letterSpacing: "0px",
                            color: "#130D0D",
                            opacity: "1" }}>Discovery</p></Col>
      <Col sm>
        <Button style={{paddingTop:'3%',background:"#FE6F21",float:'right',textAlign: "center", borderRadius: "10px",padding: "0",border: "none"}}>
            <p style= {{textAlign: "center",
                        font: "Bold 16px/19px Josefin Sans",
                        color: "#130D0D",
                        opacity: "1",marginTop:'3%',paddingTop:'5%',paddingLeft:'3%',paddingRight:'3%'}}>Login/Sign Up</p>
        </Button>
        </Col>
    </Row>
    <Row style= {{justifyContent: 'center', alignItems: 'center', fontFamily:'Span' }} >
        <p style = {{fontFamily:'Span',fontSize:'34px',fontWeight:'lighter',marginTop:'2%'}}> Launched on OrangePick today </p>
    </Row>
    <div onClick={toggle}>
    <DynamicComponent onClick= {()=> setOpen(true)}></DynamicComponent>
    </div>
      <Modal isOpen={modal} toggle={toggle} className={className} size={'lg'}>
        <ModalHeader toggle={toggle}style={{backgroundColor:"rgb(112,112,112,0.2)"}} >
          <Row >
            <Col>
            <img src = "/marketlanecoffee.png"></img>
            </Col>
            
            <Col xs="auto" style={{marginLeft:"25px"}}>
            <Row >
                <Col style={{font: "Light 24px/28px Span",
                            letterSpacing: "0px",
                            color: "#130D0D",
                            opacity: "1"}}>Market Lane Coffee</Col>
                <Col xs= "auto" style={{font: "Regular 16px/19px Josefin Sans",
                            letterSpacing: "0px",
                            color: "#130D0D",
                            opacity: "1"}}><img src="/location.png" style={{padding:'10px'}}></img>Brunswick East</Col>
            </Row>

              <Row style={{marginLeft:'1px',marginTop:'3%'}}>
                Lorem ipsum dolor sit amet
              </Row>

            </Col>
            <Col  xs="2" >
            <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "top",
                                    display: "inline-block",
                                    textAlign: "center",
                                    opacity: "1",marginLeft:'50%',paddingBottom:'10%',paddingTop:'10%',paddingRight:'20%',paddingLeft:'10%'}}>
                                            <img style ={{display:"block", margin:"0 auto"}} src="/orangecolour.png" data-tip="Add to Orange Pick"></img>

                        
                    </Row>
                    <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "top",
                                    display: "inline-block",
                                    textAlign: "center",
                                    opacity: "1",marginLeft:'50%',marginTop:'10%',marginBottom:'10%',paddingBottom:'10%',paddingTop:'10%',paddingRight:'10%',paddingLeft:'10%'}}>
                                            <img style ={{display:"block", margin:"0 auto"}} src="/boatcolour.png"></img>
                                            <p style = {{display:"block", margin:"0 auto"}}>
                            232
                        </p>
                               
                    </Row>
            </Col>
          </Row>

        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
            <p >          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </Col>

            <Col xs lg="3">
            <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "middle",
                                    marginRight:'5px',
                                    marginTop:'1%',
                                    opacity: "1",}}>
                                      <Col xs lg="2">
                                            <img style ={{ display:"block", marginTop:'15px'}} src="/orangecolour.png" data-tip="Add to Orange Pick"></img>
              </Col>
                    <Col>
                    <p style={{fontWeight:'bold',marginTop:'10px'}}>Website</p>
                    <p style={{marginTop:'-10px',fontSize:'12px'}}>www.marketlane.com</p>
                    </Col>    
            </Row>

            <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "middle",
                                    marginRight:'5px',
                                    marginTop:'10px',
                                    opacity: "1",}}>
                                      <Col xs lg="2">
                                            <img style ={{ display:"block", marginTop:'15px'}} src="/phone.png" data-tip="Add to Orange Pick"></img>
              </Col>
                    <Col>
                    <p style={{fontWeight:'bold',marginTop:'10px'}}>Phone</p>
                    <p style={{marginTop:'-10px',fontSize:'12px'}}>(02) 55695645</p>
                    </Col>    
            </Row>

            <Row style={{background:" #FFFFFF 0% 0% no-repeat padding-box",
                                    boxShadow: "0px 3px 6px #00000029",
                                    borderRadius: "10px",
                                    verticalAlign: "middle",
                                    marginRight:'5px',
                                    marginTop:'10px',
                                    opacity: "1",}}>
                                      <Col xs lg="2">
                                            <img style ={{ display:"block", marginTop:'15px'}} src="/emailcolour.png" data-tip="Add to Orange Pick"></img>
              </Col>
                    <Col>
                    <p style={{fontWeight:'bold',marginTop:'10px'}}>Email</p>
                    <p style={{marginTop:'-10px',fontSize:'12px'}}>joqh1@gmail.com</p>
                    </Col>    
            </Row>
            

            </Col>
          </Row>
          <Row style={{marginLeft:'1%'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </Row>

        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>


    
    </Container>
    //before container row then the card
  );
}
export default Index

  