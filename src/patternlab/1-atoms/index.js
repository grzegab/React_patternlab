import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from "./0-button";

export default class Atoms extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            List of atoms - small components like buttons or input fields.
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Button:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button buttonType={'blue'}>Text on button</Button>
                    </Col>
                    <Col>
                        <Button buttonType={'green'}>Text on button</Button>
                    </Col>
                    <Col>
                        <Button buttonType={'simple'}>Text on button</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Icon:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Icon example
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Input field:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Input example
                    </Col>
                </Row>
            </Container>
        );
    }
}