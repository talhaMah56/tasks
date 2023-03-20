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
    const [favorite, setFavorite] = useState<string>(options[0]);

    // This is the Control
    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setFavorite(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={favorite} onChange={updateFavorite}>
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Result: {favorite === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
