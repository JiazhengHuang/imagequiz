import React from "react";
import Flower from "../flowers.js";
import quizzes from "../data.js";

import { Container, Row, Col, Image } from "react-bootstrap";

function Quiz() {
    return (
        <Container>
            <Row>
                {quizzes.map((obj) => (
                    <>
                        <Col>
                            <quizzes sendData={} />
                        </Col>
                    </>
                ))}
            </Row>
        </Container>
    );
}

export default Quiz;
