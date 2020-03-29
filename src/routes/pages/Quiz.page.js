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
import { DefaultContainer } from '../../components/styled/utils/containers';
import {
    Header, HeaderMainP, HeaderP,
    Div, CategoryDiv, Icon,
    Question, ChoiceButton, ExitButton,
    ChoiceContainer, QuizContainer, BackgroundContainer
} from '../../components/styled/pages/quiz.components';
import DirectAccessWarning from '../../components/functional/DirectAccessWarning';
import Timer from '../../components/functional/Timer';
import LoadingScreen from '../../components/functional/LoadingScreen';

class QuizPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    }

    componentDidMount() {
        // FETCH QUESTIONS ONLY IF QUIZ HAS STARTED
        if(this.props.state.isStarted) {
            this.props.fetchQuestions(this.props.settings.selectedCategory, this.props.settings.numberOfQuestions, this.props.settings.difficulty);
            this.setState({ isFetching: true });
        }
    }

    handleSubmitAnswer(e) {
        if (e.target.innerText === this.props.question.correct_answer) {
            this.props.markCorrect();
        } else {
            this.props.markWrong();
        }
    }
    
    // CONDITIONALLY RENDERS THE PAGE AND PREVENTS UNAUTHORIZED ACCESS
    // SHOWS LOADING SCREEN WHEN QUESTIONS ARE STILL BEING FETCHED
    render() {
        if (this.props.state.isStarted) {
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