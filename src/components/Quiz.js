import { React, useEffect, useState } from "react";
import quizzes from "../data.js";
import "./Quiz.css";

import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Quiz(props) {
    // const [quiz, setQuiz] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [showScore, setShowScore] = useState(false);

    var score = 0;
    useEffect(() => {
        let id = props.match.params.id;
        console.log(id);
        let selectQuiz = quizzes[id];
        console.log(selectQuiz);
        setQuiz(selectQuiz);
    }, [props.match.params.id]);

    function handleSubmit(e) {
        e.preventDefault();
        setShowScore(true);
    }

    function handleChange(num) {
        console.log(num);
        if (num === 0) {
            score = score + 1;
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
                                        //value={obj.answer}
                                        checked={handleChange(choiseIndex)}
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
