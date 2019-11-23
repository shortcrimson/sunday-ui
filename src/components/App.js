import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Header";
// import ProjectNav from "./ProjectNav";
import NavControl from '../containers/NavControl';
import ContentPane from "./ContentPane";

import "../styles/app.css";

class App extends Component {

	constructor(props) {
		super(props);
		this.setState({

		});
	}

    render() {
        return (
            <div className="app">
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <Header />
                    </Row>
                    <Row noGutters={true}>
                        <Col sm={4} as={"navbar"}>
                            <NavControl />
                        </Col>
                        <Col sm={8} as={"content"}>
                            <ContentPane />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
