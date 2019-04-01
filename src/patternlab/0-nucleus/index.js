import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';

import Color from './0-colors/index';
import FontNucleus from './1-fonts/index';

export default class Nucleus extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className={'pt-100'}>
                        <Jumbotron>
                            <h3> Place for Nucleus</h3>
                            <p className={'lead'}> I'm using bootstrap here - but normally here would be definitions for
                                cols, rows, page spacing etc. For the moment color and fonts will be kept here.
                            </p>
                            <p>It's out of scope for patternlab - it's my own interpretation.</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        List of colors used in project:
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Color colorName={"green-1"}/>
                    </Col>
                    <Col>
                        <Color colorName={"green-2"}/>
                    </Col>
                    <Col>
                        <Color colorName={"blue"}/>
                    </Col>
                    <Col>
                        <Color colorName={"red"}/>
                    </Col>
                    <Col>
                        <Color colorName={"black"}/>
                    </Col>
                    <Col>
                        <Color colorName={"grey"}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        List of fonts used in project:
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontNucleus fontName={"monserrat"}>Test of this text</FontNucleus>
                    </Col>
                    <Col>
                        <FontNucleus fontName={"work-sans"}>Test of this text</FontNucleus>
                    </Col>
                    <Col>
                        <FontNucleus fontName={"sniglet"}>Test of this text</FontNucleus>
                    </Col>
                </Row>
                <Row><Col className={'pt-100'}/></Row>
            </Container>
        );
    }
}