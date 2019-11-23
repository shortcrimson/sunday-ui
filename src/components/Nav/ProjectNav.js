import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/projectnav.css";

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
																		{this.props.projects.map(prj => 
																			<li tabIndex="0" key={prj._id}>{prj.name}</li>
																		)}
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="task-list">
                                <ul>
																	{this.props.tasks.map(task =>
																		<li tabIndex="0" key={task._id}>{task.description}</li>	
																	)}
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
