import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function UpdateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={UpdateAnswer} />
            </Form.Group>
            <div>Your answer is {answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
