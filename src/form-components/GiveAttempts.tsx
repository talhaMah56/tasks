import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
/**
The GiveAttempts component simulates a user taking a quiz with a limited number of attempts, but also provides a way for them to gain as many attempts as they want via a numeric input box.

You will need a state to represent the number of attempts the user has left, and another state to represent the number of attempts they are requesting.
The initial number of attempts left should be 3.
The number of attempts left should be visible.
There should be a numeric input box where the user can specify their requested number of attempts.
There should be two buttons, one labeled use that decreases the attempts by one and one labeled gain that increases the attempts by the amount in the input box.
If the user attempts to request an invalid amount (e.g., the empty string "") that cannot be parsed as an integer, then do not change their number of attempts.
When the user is out of attempts, the use button should be disabled
*/
export function GiveAttempts(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(3);

    function manageAttempts(num: number): void {
        if (Number.isInteger(num)) {
            changeAttempts(attempts + num);
        } else {
            changeAttempts(attempts + 0);
        }
    }
    const [gain, setGained] = useState<string>("0");
    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>How many more attepts you want?</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setGained(event.target.value)
                    }
                />
            </Form.Group>

            <Button onClick={() => manageAttempts(-1)} disabled={!attempts}>
                use
            </Button>

            <Button onClick={() => manageAttempts(parseInt(gain))}>gain</Button>

            {<div>Number of attempts left: {attempts}</div>}
        </div>
    );
}
