import React from "react";
import ListGroup from "../components/ListGroup/ListGroup";
import Card from "../components/Card/card.js";
import Row from "../components/Row";
import Col from "../components/Col";

function Project() {
    return (
        <Card>
            <Row>
                <Col>
                    <Row>
                        <ListGroup />
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default Project;