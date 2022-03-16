import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import FunSignUp from './components/FunSignUp';
import TelentSignUp from './components/TelentSignUp';

const App = () => {
  return (
    <div className='form-section'>
    <Container>
        <Row>
            <Col lg={6} className='mx-auto'>
                <div className="form">
                    <Tabs defaultActiveKey="telentSignUp" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="telentSignUp" title="Telent SignUp">
                            <TelentSignUp />
                        </Tab>
                        <Tab eventKey="funSignUp" title="Fun SignUp">
                            <FunSignUp />
                        </Tab>
                    </Tabs>
                </div>
            </Col>
        </Row>
    </Container>
</div>
)
};

export default App;
