import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
/**
 * 
 * 
 The ChangeType component simulates another an editor for a quiz application that provides
  a way to change the type of a quiz question by pressing a button. 
  Recall from the Objects task that Quiz Questions can come in either Multiple Choice or Short Answer.

You will need a single state to handle whether the type is multiple_choice_question or short_answer_question.
The type of the state should be QuestionType, not string.
There should be a button labelled Change Type that changes the state from one type to the other.
When the type is multiple_choice_question, the text Multiple Choice should be visible.
When the type is short_answer_question, the text Short Answer should be visible.
The initial type must be short_answer_question.
 */
export function ChangeType(): JSX.Element {
    const [visible, setVisible] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeVisibility(): void {
        if (visible === "short_answer_question") {
            setVisible("multiple_choice_question");
        } else {
            setVisible("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeVisibility}>Change Type </Button>
            {visible === "short_answer_question" && <div>Short Answer</div>}
            {visible === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
