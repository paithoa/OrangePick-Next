import { Container, Row, Col,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const HomeLogoTitle = () => {
    return(
        <Col style={{flex: "1", /* additionally, equal width */
    padding: "1em",backgroundColor:"#FE6F21",position:"relative"}}>
            <section className="section" >
                <Row style={{paddingLeft:'30%',paddingRight:'25%'}}>
                <img src = "/orangehome.png"></img>

                </Row>
                <Row style={{paddingLeft:'15%',marginBottom:'-5%'}} >
                    <p className="title">OrangePick</p>
                </Row>
                <Row >
                    <p className="subtitle">Discover gems in your local community</p>
                </Row>
            </section>
        </Col>
        
)}

export default HomeLogoTitle