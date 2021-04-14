import React from "react";
import Quizs from "../data.js";
import Flower from "../flowers.js";

import { Container, Row, Col, Image } from "react-bootstrap";

function Quiz() {
    return (
        <Container>
            <Row>
                {Quizs.map((obj) => (
                    <>
                        <Col className="image-col">
                            <br />
                            {obj.picture}
                        </Col>
                    </>
                ))}
            </Row>
        </Container>
    );
}

export default Quiz;
