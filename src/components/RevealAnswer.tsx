import React, { useState } from "react";
import { Button } from "react-bootstrap";
/**
 * 
The RevealAnswer component simulates a quiz application that provides a way to “reveal the answer” to a user by clicking a button.
 The answer will be 42 for our purposes.

You will need a state to handle whether the text is visible.
There is a button labelled Reveal Answer that inverts the state.
The text 42 is not initially visible.
When the button is clicked, the text 42 should be visible.
 */

/**
 * 
  const [visible, setVisible] = useState<boolean>(true);

  function flipVisibility(): void {
    // Set visible to be the logical opposite of its previous value
    setVisible(!visible);
  }

  // Only includes <div>Hello!</div> if `visible` is true
  return <div>
    <Button onClick={flipVisibility}>Show/Hide</Button>
    {visible && <div>Hello!</div>}  //JSX allows us to mix code and HTML
  </div>;

 */
export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={changeVisibility}>
                There is a Reveal Answer button
            </Button>
            {visible && <div>42</div>}
        </div>
    );
}
