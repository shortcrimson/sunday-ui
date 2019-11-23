import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Header from './Header';
import ProjectNav from './ProjectNav';
import ContentPane from './ContentPane';

import '../styles/app.css';

function App() {
    return (
        <div className="app">
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Header />
                </Row>
                <Row noGutters={true}>
                    <Col sm={4} as={'navbar'}>
                        <ProjectNav />
                    </Col>
                    <Col sm={8} as={'content'}>
                        <ContentPane />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

