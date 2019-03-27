import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';

import ButtonAtom from "./00-button";
import TextAtom from './02-text';
import LinkAtom from './03-link';
import HeadingAtom from './04-heading';
import ListAtom from './06-list';
import InputAtom from "../1-atoms/09-input";

/*
atom -
cite - italic text
label - for forms
input - different types - prop or dissferet export? + placeholder
select
 */

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


/*
organisms -
paragraph = text +  quotation
form - form input - multiple
accordion paragraph = text + accordion (col-6) + col 6

 */

/*
creatures -
all organisms with sections
 */
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
                        <ButtonAtom buttonType={'blue'}>Text on button</ButtonAtom>
                    </Col>
                    <Col>
                        <ButtonAtom buttonType={'green'}>Text on button</ButtonAtom>
                    </Col>
                    <Col>
                        <ButtonAtom buttonType={'simple'}>Text on button</ButtonAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Text:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextAtom>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                            est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                            libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                            et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
                            sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                            doloribus asperiores repellat.</TextAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Link:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LinkAtom linkAttribute={'#'}>Some fancy link</LinkAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Heading:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HeadingAtom>Some fancy header</HeadingAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        List:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListAtom elements={['element1', 'element2', 'element3']}/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Image:
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Datetime:
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Input example:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputAtom type={'text'}></InputAtom>
                    </Col>
                </Row>
            </Container>
        );
    }
}