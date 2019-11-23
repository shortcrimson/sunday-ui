import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/projectnav.css";

class ProjectNav extends Component {
    render() {
        return (
            <div className="project-nav">
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <div className="project-nav-title">
                            <h5>Projects</h5>
                        </div>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <div className="project-list">
                                <ul>
                                    <li tabindex="0">Tidying House</li>
                                    <li tabindex="0">Work</li>
                                    <li tabindex="0">Random</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="task-list">
                                <ul>
                                    <li tabindex="0">Take bin out</li>
                                    <li tabindex="0">Finish work</li>
                                    <li tabindex="0">Learn to Fly</li>
                                    <li tabindex="0">Get a beer</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ProjectNav;
