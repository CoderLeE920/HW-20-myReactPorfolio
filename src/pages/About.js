import React from "react";
import Container from "../components/Container";
import Card from "../components/Card/Card.js";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header/Header.js";

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <h1>About Thai Lee</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span class="border border-white"></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p class="lr-3">I'm a current student in the coding bootcamp given by the University of Denver.</p>
                                    <p>Prior to joining this bootcamp I've worked in various jobs like general labor in a factiory in the midwest.</p>
                                    <p>I got turned into the tech world when I moved to Seattle, WA and worked as a mover for Suddath. As a mover we worked for 
                                      Microsoft. We moved their offices around and did a little bit of help desk. It also helped when all of your friends
                                      worked at Microsoft and Amazon. </p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default About;