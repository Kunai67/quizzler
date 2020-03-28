import shuffle from './shuffle';

export function randomizeChoices(incorrectAnsArr, correctAns) {
    let answersArr = incorrectAnsArr;
    answersArr.push(correctAns);
    shuffle(answersArr);

    return answersArr;
}