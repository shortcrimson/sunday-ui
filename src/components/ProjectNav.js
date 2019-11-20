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
                                    <li>Tidying House</li>
                                    <li>Work</li>
                                    <li>Random</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="task-list">
                                <ul>
                                    <li>Take bin out</li>
                                    <li>Finish work</li>
                                    <li>Learn to Fly</li>
                                    <li>Get a beer</li>
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
