import React from "react";
import "./Home.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../communication/api";

function Home() {
    const [flower, setFlower] = useState([]);

    useEffect(() => {
        if (flower.length === 0) {
            api.getFlower().then((x) => setFlower(x));
        }
    });

    return (
        <Container>
            <Row>
                {flower.map((obj, index) => (
                    <>
                        <Col className="image-col">
                            <Link to={"/quiz/" + index}>
                                <Image
                                    src={obj.picture}
                                    alt={obj.name}
                                    className="img-flower "
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
