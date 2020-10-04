import React from 'react';
import './App.css';
import PageImage from './component/PageImage';
import PageBC from './component/PageBC';
import {Dropdown, Row, Col, Container} from 'react-bootstrap';
import PageCrsl from './component/PageCrsl';
import PageJumbotrn from './component/PageJumbotrn';
import PageList from './component/PageList';
import PageForm from './component/PageForm';

function App() {
  return (
    <div>
      {/* <PageImage/>       */}
       
      <Container fluid>
                <Row className="bg-dark">
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Pilih Bahasa
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Bahasa Tubuh</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col md={{ span: 2}}><PageImage/></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col md={{ span: 4}}><PageBC /></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}><PageCrsl/></Col>
                    <Col></Col>
                </Row><br/>
                <Row>
                    <Col xs={3}><PageList/></Col>
                    <Col xs={5}><PageJumbotrn/> </Col>
                    <Col xs={4}><PageForm/> </Col>
                </Row>
            </Container>
            <br/><br/><br/>
    </div>
  );
}

export default App;
