import { React, useEffect, useState } from "react";
import "./Quiz.css";
import api from "../communication/api";

import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Quiz(props) {
    const [quiz, setQuiz] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let id = props.match.params.id;
        console.log(id);
        if (quiz.length === 0) {
            api.getQuizById(id).then((x) => setQuiz(x));
        }
        console.log(quiz);
    }, [quiz.length, props.match.params.id, quiz]);

    function handleSubmit(e) {
        e.preventDefault();
        setShowScore(true);
    }

    function handleChange(event) {
        console.log(event.target.value === "true");
        if (event.target.value === "true") {
            setScore(score + 1);
            console.log(score);
        }
    }

    return (
        <Container>
            <Row>
                {quiz.map((obj, questionIndex) => (
                    <>
                        <Col className="image-col">
                            <br />
                            <Image
                                src={obj.picture}
                                className="quiz-img"
                            ></Image>
                            <Form>
                                {obj.choices.map((choise, choiseIndex) => (
                                    <Form.Check
                                        custom
                                        type="radio"
                                        id={questionIndex + "-" + choiseIndex}
                                        label={choise}
                                        value={choise === obj.answer}
                                        onChange={handleChange}
                                    />
                                ))}
                            </Form>
                        </Col>
                    </>
                ))}
            </Row>
            <Row className="justify-content-md-center">
                <Button
                    variant="warning"
                    type="submit"
                    className="quiz-btn"
                    onClick={handleSubmit}
                >
                    Submite
                </Button>
            </Row>
            <br />
            {showScore ? (
                <Row className="justify-content-md-center">
                    Congratulation!!! You Scored {score}.
                </Row>
            ) : (
                <Row></Row>
            )}
        </Container>
    );
}

export default Quiz;
