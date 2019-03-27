import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';

import Color from './0-colors/index';
import Font from './1-fonts/index';

export default class Nucleus extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h2> Place for Nucleus</h2>
                            I'm using bootstrap here - but normally here would be definitions for
                        cols, rows, page spacing etc. For the moment color and fonts will be kept here.
                            It's out of scope for patternlab - it's my own interpretation.
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        List of colors used in project:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Color colorName={"green-1"} />
                    </Col>
                    <Col>
                        <Color colorName={"green-2"} />
                    </Col>
                    <Col>
                        <Color colorName={"blue"} />
                    </Col>
                    <Col>
                        <Color colorName={"red"} />
                    </Col>
                    <Col>
                        <Color colorName={"black"} />
                    </Col>
                    <Col>
                        <Color colorName={"grey"} />
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        List of fonts used in project:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Font fontName={"monserrat"}>Test of this text</Font>
                    </Col>
                    <Col>
                        <Font fontName={"work-sans"}>Test of this text</Font>
                    </Col>
                    <Col>
                        <Font fontName={"sniglet"}>Test of this text</Font>
                    </Col>
                </Row>
            </Container>
        );
    }
}