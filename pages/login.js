import { Form,FormGroup,Input,Container, Row, Col,Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import dynamic from 'next/dynamic'
const HomeLogoTitle = dynamic(() => import('../components/HomeLogoTitle'))

function login(props){
    return(
        <div style= {{height:"100vh"}}>
        <Row style={{display: "flex",height:"100vh"}}>
            <HomeLogoTitle/>
            {/* the second column is the right hand side */}
            
            <Col style={{flex: "1", /* additionally, equal width */
                        padding: "1em"}}>
                            <section >
                <Form>
                    <Row style={{justifyContent:'center'}}> 
                    
                            <p className="loginTitle">Login</p>                       
                    </Row>

                    <Row> 
                        <FormGroup style={{width:'50vh'}}>
                                <p className="email">Email</p>
                                <input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                    </Row>

                    <Row> 
                        <FormGroup style={{width:'50vh'}}>
                                <p className="password">Password</p>
                                <input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                    </Row>

                    <Row style={{justifyContent:'center'}}>       <Button className="loginButton">Login</Button>

                    </Row>
                    
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'5%'}}> Don't have an account yet? Join Orange Pick
                    </Row>

                    </Form>
                </section>
                
            </Col>
            

        </Row>
        </div>
    )

}



export default login
