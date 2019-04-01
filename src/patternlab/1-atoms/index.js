import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';

import ButtonAtom from "./00-button";
import TextAtom from './02-text';
import LinkAtom from './03-link';
import HeadingAtom from './04-heading';
import QuoteAtom from './05-quote';
import ListAtom from './06-list';
import ImageAtom from "./07-image";
import DatetimeAtom from "./08-datetime";
import InputAtom from "./09-input";
import CardAtom from "./10-card";
import CiteAtom from "./11-cite";
import LabelAtom from './12-label';
import BadgeAtom from "./13-badge";

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
                        <hr/>
                        Quote:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuoteAtom>Some quote text</QuoteAtom>
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
                        <ImageAtom/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Datetime:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DatetimeAtom>27.10.2020</DatetimeAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Input example:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputAtom/>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Card example:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardAtom title={'Example card'}>
                            Some card text non provident, similique sunt in culpa qui
                            officia deserunt mollitia animi, id
                            est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                            libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                            et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
                            sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                            doloribus asperiores repellat.
                        </CardAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        Cite:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CiteAtom>Some text in quote</CiteAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        label:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LabelAtom>Label text</LabelAtom>
                    </Col>
                </Row>
                <Row>
                    <Col className={'pt-100'}>
                        badge:
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BadgeAtom variant="primary">Primary</BadgeAtom>
                        <BadgeAtom variant="secondary">Secondary</BadgeAtom>
                        <BadgeAtom variant="success">Success</BadgeAtom>
                        <BadgeAtom variant="danger">Danger</BadgeAtom>
                        <BadgeAtom variant="warning">Warning</BadgeAtom>
                        <BadgeAtom variant="info">Info</BadgeAtom>
                        <BadgeAtom variant="light">Light</BadgeAtom>
                        <BadgeAtom variant="dark">Dark</BadgeAtom>
                    </Col>
                </Row>
            </Container>
        );
    }
}