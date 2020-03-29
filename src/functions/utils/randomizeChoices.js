import shuffle from './shuffle';

export default function randomizeChoices(incorrectAnsArr, correctAns) {
    let answersArr = incorrectAnsArr;
    if(!incorrectAnsArr.includes(correctAns)) {
        answersArr.push(correctAns);
    }
    shuffle(answersArr);

    return answersArr;
}