import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';

/*
creatures -
all organisms with sections
 */
export class Page1 extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            List of molecules - things that are created form atoms.
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Full text:
                    </Col>
                </Row>
            </Container>
        );
    }
}

export class Page2 extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            List of molecules - things that are created form atoms.
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Full text:
                    </Col>
                </Row>
            </Container>
        );
    }
}