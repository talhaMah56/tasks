/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const tempNum: number[] = [...numbers];
    if (tempNum.length == 0) {
        return tempNum;
    } else if (tempNum.length == 1) {
        return [...tempNum, ...tempNum];
    } else {
        return [tempNum[0], tempNum[tempNum.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tempNum: number[] = [...numbers];
    return tempNum.map((aNum: number): number => aNum * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const tempNum: string[] = [...numbers];
    return tempNum.map((aString: string): number =>
        parseInt(aString) ? parseInt(aString) : 0
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let tempStr: string[] = [...amounts];

    //console.log(tempStr[0][0] == "$" ? tempStr[0].substring(1) : tempStr[1][0]);
    //I am removing the dollar sign from each string

    //also works str.replace("$", "")
    tempStr = tempStr.map((str: string): string =>
        str[0] == "$" ? str.substring(1) : str
    );

    return stringsToIntegers(tempStr);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let tempStr: string[] = [...messages];
    tempStr = tempStr.map((str: string): string =>
        str.endsWith("!") ? str.toUpperCase() : str
    );
    //This will remove any strings containing a "!" in the end, the
    // ! before the str.endsWidth() is to make sure the strings without the "!" in the end
    // remain in the list
    return tempStr.filter((str: string): boolean => !str.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let tempWords: string[] = [...words];
    tempWords = tempWords.filter((str: string): boolean => str.length < 4);

    //const sum = prices.reduce((currentTotal: number, num: number) => currentTotal+num, 0);

    return tempWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let tempStr: string[] = [...colors];
    let allRGB = true;
    tempStr = tempStr.filter(
        // Check if the string is red, blue or green"
        (aColor: string): boolean =>
            aColor == "red" || aColor == "blue" || aColor == "green"
                ? true
                : (allRGB = false)
    );
    return allRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const tempAddends: number[] = [...addends];
    //If the if statment isn't true return "0=0"
    //Else do the whole process
    if (tempAddends.length > 0) {
        const sum = tempAddends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );

        //Convert the whole array into a string using .toString()
        //And then replace all commas with addition sign
        //Add sum = and the string together and return it
        return sum
            .toString()
            .concat("=")
            .concat(tempAddends.toString().replaceAll(",", "+"));
    }
    return "0=0";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const tempArray: number[] = [...values];

    const findNegativeIndex = (numbers: number[]): number =>
        numbers.findIndex((number: number): boolean => number < 0);

    if (findNegativeIndex(tempArray) >= 0) {
        console.log("here");
        const sum: number = tempArray
            .slice(0, findNegativeIndex(tempArray))
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        console.log("Before", tempArray);
        tempArray.splice(findNegativeIndex(tempArray) + 1, 0, sum);
        console.log("After", tempArray);
        return tempArray;
    } else {
        const sum: number = tempArray.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        tempArray.splice(tempArray.length, 0, sum);
        return tempArray;
    }
}
