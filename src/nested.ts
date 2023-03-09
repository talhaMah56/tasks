/* eslint-disable indent */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question => ({ ...quest })
    );
    const quest = deepCopy.filter(
        (aQuest: Question): boolean => aQuest.published
    );
    return quest;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question => ({ ...quest })
    );
    const quests = deepCopy.filter(
        (quest: Question): boolean =>
            !(
                quest.body === "" &&
                quest.expected === "" &&
                quest.options.length >= 0
            )
    );

    return quests;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const quest = questions.filter(
        (aQuestion: Question): boolean => aQuestion.id === id
    );

    return quest[0] || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const quest = questions.filter(
        (aQuestion: Question): boolean => !(aQuestion.id === id)
    );

    return quest;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((quest: Question): string => quest.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (totalsum: number, quest: Question) => totalsum + quest.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const totalPoints: number = questions.reduce(
        (totalsum: number, quest: Question) =>
            quest.published ? totalsum + quest.points : totalsum + 0,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const quest: string = questions
        .map(
            (quest: Question): string =>
                `${quest.id},${quest.name},${quest.options.length},${quest.points},${quest.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + quest.replaceAll(",,", ",0,");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    //const an: Answer = {questionId: questions[0].id, text: "", submitted: false, correct: false};
    const answers: Answer[] = questions.map(
        (aQuest: Question): Answer => ({
            questionId: aQuest.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question => ({ ...quest, published: true })
    );
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //Try using every
    if (questions.length > 0) {
        const Atype: QuestionType = questions[0].type;
        //console.log(Atype);
        const check: Question[] = questions.filter(
            (quest: Question): boolean => quest.type === Atype
        );
        return questions.length === check.length;
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question => ({ ...quest })
    );
    deepCopy.splice(deepCopy.length, 0, makeBlankQuestion(id, name, type));
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question =>
            quest.id === targetId ? { ...quest, name: newName } : { ...quest }
    );
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question =>
            quest.id === targetId &&
            newQuestionType !== "multiple_choice_question"
                ? { ...quest, type: newQuestionType, options: [] }
                : { ...quest }
    );
    return deepCopy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const insertNewOption = (
        options: string[],
        targetOptionIndex: number,
        newOption: string
    ): string[] => {
        let Options = [...options];
        if (targetOptionIndex === -1) {
            Options = [...Options, newOption];
        } else {
            Options.splice(targetOptionIndex, 1, newOption);
        }
        return Options;
    };
    return questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? {
                      ...question,
                      options: insertNewOption(
                          question.options,
                          targetOptionIndex,
                          newOption
                      )
                  }
                : { ...question, options: [...question.options] }
    );
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const deepCopy = questions.map(
        (quest: Question): Question => ({ ...quest })
    );
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    deepCopy.splice(
        targetIndex + 1,
        0,
        duplicateQuestion(newId, questions[targetIndex])
    );
    return deepCopy;
}
