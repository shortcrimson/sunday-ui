import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Header from './Header';
import ProjectNav from './ProjectNav';
import TaskNav from './TaskNav';
import ContentPane from './ContentPane';

import '../styles/app.css';

function App() {
  return (
      <div className="app">
          <Container fluid={true}>
              <Row>
								<p>Hello, World!</p>
                  <Header />
              </Row>
              <Row>
                  <Col sm={3}>
                      <ProjectNav />
                  </Col>
                  <Col sm={9}>
                      <TaskNav />
                      <ContentPane />
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;

