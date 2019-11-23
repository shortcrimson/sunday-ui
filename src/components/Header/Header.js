import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <Col>
                            <div className="title">
                                <h2>Hello, Toby</h2>
                            </div>
                        </Col>
                        <Col>
                            <div className="header-control">
															<p>Settings</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;
