import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
/**
 * 
 The ChooseTeam component provides a list of buttons representing people,
  and a list of people representing a team. Clicking a button adds the given
   person to the team on the right, if they are not already there.

Currently, the component is broken and partially out,
 because its click handlers are not coded correctly to properly update state. 
 Fix the click handler functions so that the component works correctly.
  Hint: You will want to modify the signature and binding of one of the inner helper functions.

You must not add or remove components; you can only modify the existing components.
 */
const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(option: string) {
        if (!team.includes(option)) {
            const newPeople = [...team, option];
            setTeam(newPeople);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
