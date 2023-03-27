import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    // This is the State (Model)
    const [canEdit, setCanEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // This is the Control
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateCanEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setCanEdit(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit mode"
                label="Edit Mode"
                checked={canEdit}
                onChange={updateCanEdit}
            />
            {canEdit && (
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {canEdit && (
                <Form.Check
                    type="checkbox"
                    id="is student check"
                    label="Are you a student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            )}
            <div>
                {name} is {isStudent === true ? "" : "not"} a student
            </div>
        </div>
    );
}
