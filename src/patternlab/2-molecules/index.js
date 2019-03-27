import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react'
import Row from 'react-bootstrap/Row'

import TextMolecule from './00-text/index'

/*
moleclues -
text = heading + text + list
quotation = text + quote + line on side
accordio = cards (multiple) with hide option
forminput = text + input
image - image with datedime as footer and cite
dropdown - button with dropdown list + dropdown header
carousel - images
 */

export default class Molecules extends React.Component {
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
                <Row>
                    <Col>
                        <TextMolecule heading={'Text for this molecule'}>Curabitur blandit mollis lacus. Maecenas vestibulum mollis diam.
                            Nullam accumsan lorem in dui. Nullam sagittis. Phasellus consectetuer vestibulum elit.

                            Phasellus accumsan cursus velit. Ut tincidunt tincidunt erat. Phasellus ullamcorper ipsum
                            rutrum nunc. Praesent turpis. Ut varius tincidunt libero.

                            Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue
                            mollis justo. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.
                            Praesent adipiscing. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros,
                            sed gravida augue augue mollis justo. Fusce risus nisl, viverra et, tempor et, pretium in,
                            sapien.

                            Praesent ac massa at ligula laoreet iaculis. Proin faucibus arcu quis ante. Etiam vitae
                            tortor. Fusce convallis metus id felis luctus adipiscing. Curabitur turpis.</TextMolecule>
                    </Col>
                </Row>
            </Container>
        );
    }
}