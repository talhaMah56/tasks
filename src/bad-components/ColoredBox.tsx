import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
/**
The ColoredBox component provides a single button that cycles through a list of colors,
 updating a box off to its right.

Currently, the component does not work, since the box always stays
 the same color when clicked. Fix the state so the component works correctly.

You must NOT add or remove components; you can only modify the existing components.
 */
// interface ColorChangeProps {
//     colorIndex: number;
// }
function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <>
            <Button
                onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}
            >
                Next Color
            </Button>
            <ColorPreview colorIndex={colorIndex}></ColorPreview>
        </>
    );
}
interface ColorProps {
    colorIndex: number;
}
function ColorPreview({ colorIndex }: ColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor></ChangeColor>
            </div>
        </div>
    );
}
