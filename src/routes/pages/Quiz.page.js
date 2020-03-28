import React from 'react';
import styled from 'styled-components';
import { WHITE, BG, PRIMARY, BLACK } from '../../res/color-palette';
import { DefaultContainer } from '../../components/styled/containers';
import { DefaultButton } from '../../components/styled/buttons';
import { Link, Redirect } from 'react-router-dom';

// IMAGE LINKS
import CogsLink from '../../res/svg/cogs.svg';
import CheckLink from '../../res/svg/checkmark-circle.svg';
import QuestionLink from '../../res/svg/question-circle.svg';
import BookLink from '../../res/svg/book.svg';
import ExitLink from '../../res/svg/home.svg';
import ClockLink from '../../res/svg/alarm-clock.svg';

// REDUX IMPORTS
import { connect } from 'react-redux';
import { markCorrect, markWrong, recordTime, fetchQuestions, updateStatus } from '../../redux/actions';

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
    font-size: 3em;
    color: ${ WHITE };

    @media screen and (max-width: 768px) {
        font-size: 1.5em;
    }
`;

const HeaderMainP = styled(HeaderP)`
    font-weight: bold;
    
    @media screen and (max-width: 768px) {
        font-size: 2em;
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
    width: 3.5em;
    margin: 0 2em;

    @media screen and (max-width: 768px) {
        width: 2.5em;
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

const BackToHome = styled(Link)`
    flex-grow: 1;
    color: ${ BG };
    display: inline-block;
    margin-top: 1em;
    font-size: 2em;
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

class Timer extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            minutes: 0,
            seconds: 0
        };

        this.tick = this.tick.bind(this);
    }
    
    tick() {
        if(this.state.seconds > 60) {
            this.setState({
                minutes: this.state.minutes + 1,
                seconds: 0
            })
        } else {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick()
            , 1000
        );
    }

    componentWillUnmount() {
        this.props.recordTime(this.state.minutes, this.state.seconds);
        clearInterval(this.timer);
    }

    render() {
        return <HeaderP>{ this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes }: { this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds  }</HeaderP>
    }
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
            this.props.markWrong();
        }
    }

    componentDidMount() {
        this.props.fetchQuestions(this.props.settings.selectedCategory, this.props.settings.numberOfQuestions, this.props.settings.difficulty);
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
                                <Icon src={ ClockLink } alt='Time: '/>
                                <Timer recordTime={this.props.recordTime}/>
                            </Div>
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
        }
        else if (this.props.question === undefined) {
            if (this.props.id > this.props.numberOfQuestions && this.props.numberOfQuestions > 0) {
                this.props.updateStatus();
                return <Redirect to="result"/>
            } else {
                return (
                    <DefaultContainer>
                        <HeaderMainP>Loading...</HeaderMainP>
                    </DefaultContainer>
                )
            }
        }
        else {
            return (
                <DefaultContainer>
                    <div>
                        <HeaderMainP>Looks like you came here directly.</HeaderMainP>
                        <BackToHome to="/">Back to Home</BackToHome>
                    </div>
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
        state: state.gameState,
        settings: state.gameSettings
    }
}

export default connect(mapStateToProps, { markCorrect, markWrong, recordTime, fetchQuestions, updateStatus })(QuizPage);