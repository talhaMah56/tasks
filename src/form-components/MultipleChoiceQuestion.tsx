import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [selected, setSelected] = useState<string>(options[0]);

    // This is the Control
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h5>Multiple Choice Question</h5>
            <Form.Group controlId="Options">
                <Form.Label>Select an Answer</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Result: {selected === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
