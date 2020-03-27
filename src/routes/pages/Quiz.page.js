import React from 'react';
import styled from 'styled-components';
import { WHITE, BG, PRIMARY, BLACK } from '../../res/color-palette';
import { DefaultContainer } from '../../components/styled/containers';
import { DefaultButton } from '../../components/styled/buttons';
import { Link } from 'react-router-dom';

// IMAGE LINKS
import CogsLink from '../../res/svg/cogs.svg';
import CheckLink from '../../res/svg/checkmark-circle.svg';
import QuestionLink from '../../res/svg/question-circle.svg';
import BookLink from '../../res/svg/book.svg';
import ExitLink from '../../res/svg/home.svg';

// REDUX IMPORTS
import { connect } from 'react-redux';
import { markCorrect } from '../../redux/actions';

const Header = styled.div`
    background: ${ BLACK };
    padding: 2em;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-flow: column wrap;
        padding: 2em 1em;        
    }
`;

const HeaderP = styled.p`
    font-size: 4em;
    color: ${ WHITE };

    @media screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const HeaderMainP = styled(HeaderP)`
    font-weight: bold;
    
    @media screen and (max-width: 768px) {
        font-size: 2.5em;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 600px) and (max-width: 768px) {
        justify-content: space-around;        
    }
`;

const CategoryDiv = styled(Div)`
    flex-grow: 1;
    justify-content: start;

    @media screen and (max-width: 768px) {
        justify-content: center;        
        margin-bottom: 2em;
    }
`;

const Icon = styled.img`
    width: 4em;
    margin: 0 2em;

    @media screen and (max-width: 768px) {
        width: 3em;
        margin: 0 1em;        
    }
`;

const BackgroundContainer = styled.div`
    height: 100vh;
    background: ${ BG };
`;

const QuizContainer = styled(DefaultContainer)`
    min-height: auto;
    flex-flow: column wrap;
    height: 80%;
`;

const Question = styled.p`
    font-size: 5em;
    color: ${ PRIMARY };
    margin: 1em 0.5em 2em 0.5em;

    @media screen and (max-width: 768px) {
        font-size: 3em;
    }

    @media screen and (min-width: 1441px) {
        font-size: 7em;
    }
`;

const ChoiceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const ChoiceButton = styled(DefaultButton)`
    flex-basis: 40%;
    margin-bottom: 1em;

    @media screen and (max-width: 600px) {
        padding: 1em;
        flex-basis: 80%;
    }
`;

const ExitButton = styled(Link)`
    margin-left: 1em;
    background: white;
    padding: 1em 0;
    border-radius: 20px;
`;

// HELPER FUNCTION TO DECODE HTML ELEMENTS FROM THE JSON
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

//HELPER FUNCTION TO SHUFFLE AN ARRAY (Fisher-Yates (aka Knuth) Shuffle)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function randomizeChoices(incorrectAnsArr, correctAns) {
    let answersArr = incorrectAnsArr;
    answersArr.push(correctAns);
    shuffle(answersArr);

    return answersArr;
}

class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    }

    handleSubmitAnswer(e) {
        if (e.target.innerText === this.props.question.correct_answer) {
            this.props.markCorrect();
        } else {
            console.log("Wrong");
        }
    }
    
    render() {
        if (this.props.state.isStarted && this.props.question !== undefined) {
            return (
                <BackgroundContainer>
                    <Header>
                        <CategoryDiv>
                            <Icon src={ BookLink } alt='Category: '/>
                            <HeaderMainP>{ this.props.question.category }</HeaderMainP>    
                        </CategoryDiv>
        
                        <Div>
                            <Div>
                                <Icon src={ QuestionLink } alt='Question: '/>
                                <HeaderP>{ this.props.id }</HeaderP>
                            </Div>
                            <Div>
                                <Icon src={ CogsLink } alt='Difficulty: '/>
                                <HeaderP>{ this.props.question.difficulty.toUpperCase() }</HeaderP>
                            </Div>
                            <Div>
                                <Icon src={ CheckLink } alt='Question: '/>
                                <HeaderP>{this.props.state.correctAnswers} / { this.props.numberOfQuestions }</HeaderP>
                            </Div>
                            <Div>
                                <ExitButton to="/"><Icon src={ ExitLink } alt='Exit'/></ExitButton>
                            </Div>
                        </Div>                    
                    </Header>
                    <QuizContainer bg={ BG }>
                        <Question>{ decodeHtml(this.props.question.question) }</Question>
        
                        <ChoiceContainer>
                            { 
                                randomizeChoices(this.props.question.incorrect_answers, this.props.question.correct_answer)
                                .map((ans, i) => <ChoiceButton key={i} onClick={ (e) => this.handleSubmitAnswer(e) }>{ ans }</ChoiceButton>) 
                            }
                        </ChoiceContainer>
                    </QuizContainer>
                </BackgroundContainer>
            )
        } else {
            return (
                <DefaultContainer>
                    <HeaderMainP>Looks like you came here directly.</HeaderMainP>
                </DefaultContainer>
            )
        }
    }
}

const mapStateToProps = state => {
    const i = state.gameState.questionPointer;

    return {
        id: i + 1,
        numberOfQuestions: state.serverData.questions.length,
        question: state.serverData.questions[i],
        state: state.gameState
    }
}

export default connect(mapStateToProps, { markCorrect })(QuizPage);