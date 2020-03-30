// NPM IMPORTS
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// REDUX ACTION CREATORS
import { markCorrect, markWrong, recordTime, fetchQuestions, updateStatus } from '../../redux/actions';

// HELPER FUNCTIONS
import decodeHtml from '../../functions/utils/decodeHtml';
import randomizeChoices from '../../functions/utils/randomizeChoices';

// RESOURCES IMPORTS
import { BG } from '../../res/color-palette';
import CogsLink from '../../res/svg/cogs.svg';
import CheckLink from '../../res/svg/checkmark-circle.svg';
import QuestionLink from '../../res/svg/question-circle.svg';
import BookLink from '../../res/svg/book.svg';
import ExitLink from '../../res/svg/home.svg';
import ClockLink from '../../res/svg/alarm-clock.svg';

// COMPONENT IMPORTS
import {
    Header, HeaderMainP, HeaderP,
    Div, CategoryDiv, Icon,
    Question, ChoiceButton, ExitButton,
    ChoiceContainer, QuizContainer, BackgroundContainer
} from '../../components/styled/pages/quiz.components';
import DirectAccessWarning from '../../components/functional/DirectAccessWarning';
import Timer from '../../components/functional/Timer';
import LoadingScreen from '../../components/functional/LoadingScreen';
import Modal from '../../components/functional/Modal';

function ModalSwitcher(props) {
    if (props.isShown) {
        if (props.isCorrect) {
            return (
            <Modal isShown="true" headerText="CORRECT!" type="success" toggleVisibility={props.setState}>
                Your answer is correct!
            </Modal>
            )
        } else {
            return (
            <Modal isShown="true" headerText="WRONG!" type="error" toggleVisibility={props.setState}>
                The correct answer is {props.correctAnswer}
            </Modal>
            )
        }
    } else {
        return <React.Fragment/>
    }
}

function QuizQuestion(props) {
    let choicesArr;

    // RANDOMIZE CHOICE IF TYPE IS MULTIPLE
    if (props.question.type === "multiple") {
        choicesArr = randomizeChoices(props.question.incorrect_answers, props.question.correct_answer)
    } else {
    // DONT RANDOMIZE IF TRUE OR FALSE
        let answerArr = props.question.incorrect_answers;
        if(!answerArr.includes(props.question.correct_answer)) {
            answerArr.push(props.question.correct_answer);
        }
        choicesArr = answerArr.sort().reverse();
    }

    // RENDER IF THERE IS A QUESTION
    if (props.question) {
        return (
            <QuizContainer bg={ BG }>
                <Question>{ decodeHtml(props.question.question) }</Question>
                <ChoiceContainer>
                    {  choicesArr.map((ans, i) => 
                        <ChoiceButton key={i} onClick={ props.handleSubmit }>
                            { decodeHtml(ans) }
                        </ChoiceButton>) 
                    }
                </ChoiceContainer>
            </QuizContainer>
        )
    } else {
        return <React.Fragment/>
    }
}

function IconStatus(props) {
    return (
        <Div>
            <Icon src={ props.src } alt={ props.alt }/>
            { props.children }
        </Div>
    )
}

class QuizPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCorrect: false,
            showModal: false,
            correctAnswer: undefined,
            hasEnded: false
        };

        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
        this.handleModalVisibility = this.handleModalVisibility.bind(this);
    }

    componentDidMount() {
        // FETCH QUESTIONS ONLY IF QUIZ HAS STARTED
        if(this.props.state.isStarted) {
            this.props.fetchQuestions(this.props.settings.selectedCategory, this.props.settings.numberOfQuestions, this.props.settings.difficulty, this.props.settings.choiceType);
        }
    }

    handleModalVisibility() {
        if (this.props.id > this.props.numberOfQuestions) {
            this.setState({ hasEnded: true });
        } else {
            this.setState({ showModal: false });
            if (this.state.isCorrect) {
                this.props.markCorrect();
            } else {
                this.props.markWrong();
            }
        }
    }

    handleSubmitAnswer(e) {
        this.setState({ showModal: true, correctAnswer: this.props.question.correct_answer });
        this.setState({ isCorrect: [e.target.innerText === this.props.question.correct_answer] });
    }
    
    // CONDITIONALLY RENDERS THE PAGE AND PREVENTS UNAUTHORIZED ACCESS
    // SHOWS LOADING SCREEN WHEN QUESTIONS ARE STILL BEING FETCHED
    render() {
        // LOOKS IF USER CAME FROM START PAGE OR NOT
        if (this.props.state.isStarted) {
            // LOGIC FOR LOADING SCREEN
            if (this.props.isFetching) {
                return <LoadingScreen />
            } else {
                if (this.props.id > this.props.numberOfQuestions && this.props.numberOfQuestions > 0) {
                    this.props.updateStatus();
                    return <Redirect to="result"/>
                }
                else {
                    return (
                        <BackgroundContainer>
                            <Header>
                                <CategoryDiv>
                                    <IconStatus src={ BookLink } alt='Category: '>
                                        <HeaderMainP>{ this.props.question.category }</HeaderMainP>    
                                    </IconStatus>
                                </CategoryDiv>
                                <Div>
                                    <IconStatus src={ ClockLink } alt='Time: '>
                                        <Timer recordTime={this.props.recordTime}/>
                                    </IconStatus>
                                    <IconStatus src={ QuestionLink } alt='Question: '>
                                        <HeaderP>{ this.props.id }</HeaderP>
                                    </IconStatus>
                                    <IconStatus src={ CogsLink } alt='Difficulty: '>
                                        <HeaderP>{ this.props.question.difficulty.toUpperCase() }</HeaderP>
                                    </IconStatus>
                                    <IconStatus src={ CheckLink } alt='Question: '>
                                        <HeaderP>{this.props.state.correctAnswers} / { this.props.numberOfQuestions }</HeaderP>
                                    </IconStatus>
                                    <Div>
                                        <ExitButton to="/"><Icon src={ ExitLink } alt='Exit'/></ExitButton>
                                    </Div>
                                </Div>                    
                            </Header>
                            <QuizQuestion question={this.props.question} handleSubmit={this.handleSubmitAnswer}/>
                            
                            
                            <ModalSwitcher 
                                correctAnswer={decodeHtml(this.state.correctAnswer)}
                                isCorrect={this.state.isCorrect}
                                isShown={this.state.showModal}
                                setState={this.handleModalVisibility}
                            />

                        </BackgroundContainer>
                    )
                }
            }
        } 
        else {
            return (
                <DirectAccessWarning />
                )
        }
    }    
}

// GET STATE FROM REDUX STORE AND MAP IT AS PROPS
const mapStateToProps = state => {
    const i = state.gameData.gameState.questionPointer;

    return {
        id: i + 1,
        numberOfQuestions: state.gameData.serverData.questions.length,
        question: state.gameData.serverData.questions[i],
        state: state.gameData.gameState,
        settings: state.gameSettings,
        isFetching: state.gameData.serverData.isFetching
    }
}

export default connect(
    mapStateToProps, 
    { markCorrect, markWrong, recordTime, fetchQuestions, updateStatus }
    )(QuizPage);