import shuffle from './shuffle';

export default function randomizeChoices(incorrectAnsArr, correctAns) {
    let answersArr = incorrectAnsArr;
    answersArr.push(correctAns);
    shuffle(answersArr);

    return answersArr;
}