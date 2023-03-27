import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "Silver",
        "Khaki",
        "grey"
    ];
    const [favorite, setFavorite] = useState<string>("red");

    return (
        <div>
            <h5>CHANGE COLOR</h5>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={(e) => setFavorite(e.target.value)}
                    id={color}
                    label={color}
                    value={color}
                    checked={color === favorite}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: `${favorite}` }}
                >
                    {favorite}
                </span>
            </p>{" "}
        </div>
    );
}
