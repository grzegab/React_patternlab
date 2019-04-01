import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './patternlab/global.scss'
import Navigation from './patternlab/1-atoms/01-navbar/index'

import Nucleus from './patternlab/0-nucleus/index'
import Atoms from './patternlab/1-atoms/index'
import Molecules from './patternlab/2-molecules/index'
import Organisms from './patternlab/3-organisms/index'
import Creatures from './patternlab/4-creatures/index'
import Page1 from './patternlab/5-pages/page1';

const mainPage = () => {
    return (
        <Container>
            <Row>
                <Col className={'pt-100'}>
                    <Jumbotron>
                        <h1>Description</h1>
                        <p className={'lead'}>
                            It's my own personal interpretation of patternlab
                        (<a href={'https://patternlab.io/'}>https://patternlab.io/</a>).
                            This demo page demonstrates approach for patternlab.
                        </p>
                        <p>There is already React version available. But since it suppose to be demo I'm creating things
                        from scratch.
                        Also Bootstrap provide more components that can be used here instead of custom ones, but for
                            demo puropses I'm creating more things on my own.
                        </p>
                        <p>
                        Firstly there are nucleus (not standard part of patternlab).
                        This describe smallest things in website as colors and page layout. Since I'm using bootstrap as
                        well to
                        build this demo page, no layouts (or changes to bootstrap) are made. But some fonts and colors
                        are included.
                        </p>
                        <p>
                        Next are atoms (standad for patternlab). Those are the smallest parts of webpage, such as: text,
                        button, list, input fields, headings, etc.
                        </p>
                        <p>
                        Atoms are organized into molecules. Molecules are for example combination of heading, input
                        field and button.
                        </p>
                        <p>
                        Molecules connects into one organisms.
                        </p>
                        <p>
                        Next are templates - called here creatures. Those are ready pages just with dummy content.
                        </p>
                        Last should be ready pages. Since I don't have any content it would contain a dummy content,
                        so it basically would be template.
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Route exact path="/" component={mainPage}/>
                    <Route path="/nucleus" component={Nucleus}/>
                    <Route path="/atoms" component={Atoms}/>
                    <Route path="/molecules" component={Molecules}/>
                    <Route path="/organisms" component={Organisms}/>
                    <Route path="/creatures" component={Creatures}/>
                    <Route path="/page" component={Page1}/>
                </div>
            </Router>
        );
    }
}

export default App;
