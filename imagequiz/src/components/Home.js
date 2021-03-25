import React from "react";
import Flower from "../flowers.js";
import "./Home.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Row>
                {Flower.map((obj) => (
                    <>
                        <Col
                            style={{
                                height: 350,
                                width: 300,
                                textAlign: "center",
                            }}
                        >
                            <Link to="/quiz">
                                <Image
                                    src={obj.picture}
                                    alt={obj.name}
                                    classname="flower"
                                    style={{
                                        height: 300,
                                        width: 300,
                                    }}
                                ></Image>
                            </Link>
                            <br />
                            {obj.name}
                        </Col>
                    </>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
