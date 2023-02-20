import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Talha Mahmood</p>
            <p> Hello World </p>
            <h1> Adding a header, heading</h1>
            <img
                src={require("./Images/Doge-meme-2-1536x922.webp")}
                alt="A picture of my dog Ada"
                width={1000}
                height={500}
            />
            <ol>
                <li>Adding first element</li>
                <li>Adding second element</li>
                <li>Adding third element</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World{" "}
            </Button>

            <Container>
                <Row>
                    <Col>
                        First column.
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Second column
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
