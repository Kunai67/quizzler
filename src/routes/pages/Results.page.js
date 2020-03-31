// NPM IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    TwitterShareButton
} from 'react-share';

// RESOURCES IMPORTS
import { WHITE, BG } from '../../res/color-palette';
import FBIconLink from '../../res/svg/facebook.svg';
import TwitterIconLink from '../../res/svg/twitter.svg';
import MsgrIconLink from '../../res/svg/facebook-messenger.svg';

// COMPONENT IMPORTS
import { DefaultContainer } from '../../components/styled/utils/containers';
import { SubHeading } from '../../components/styled/utils/headings';
import DirectAccessWarning from '../../components/functional/DirectAccessWarning';
import { 
    Div, HomeLink, P, ResultSummary, 
    SocialContainer, SocialIcon, StyledMainHeading 
} from '../../components/styled/pages/results.components';

class ResultsPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            passed: false
        }
    }
    
    componentDidMount() {
        let userPassed = ((this.props.numberOfCorrectAnswers / this.props.numberOfQuestions) >= 0.5);
        this.setState({
            passed: userPassed
        })
        document.title = userPassed ? "Congrats! You passed! 🤩" : "Oh no, you failed! 😫";
    }

    render() {
        // NUMBER OF QUESTIONS CANNOT BE ZERO IF THE QUIZ HAS FINISHED
        if (this.props.numberOfQuestions !== 0) {
            return (
                <DefaultContainer>
                    <div>
                        <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                        <SubHeading color={ BG }>Results</SubHeading>
                        <Div>
                            <P>Finish Time</P>
                            <P color={ BG }>{this.props.time.minutes} minutes, {this.props.time.seconds} seconds</P>
                        </Div>
                        <Div>
                            <P>Correct Answers</P>
                            <P color={ BG }>{ this.props.numberOfCorrectAnswers }/{ this.props.numberOfQuestions } Correct Answers</P>
                        </Div>
        
                        <ResultSummary>{ this.state.passed ? "You Passed! Congrats!" : "Sorry, you failed." }</ResultSummary>
                        <HomeLink to="/">Play Again?</HomeLink>
        
                        <P>Share on:</P>
                        <SocialContainer>
                            <FacebookShareButton url={window.location.hostname}>
                                <SocialIcon src={FBIconLink} alt="Facebook"/>
                            </FacebookShareButton>
                            <FacebookMessengerShareButton>
                                <SocialIcon src={MsgrIconLink} alt="Facebook"/> 
                            </FacebookMessengerShareButton>
                            <TwitterShareButton>
                                <SocialIcon src={TwitterIconLink} alt="Twitter"/>
                            </TwitterShareButton>
                        </SocialContainer>
                    </div>
                </DefaultContainer>
            ) 
        }
        else {
            return <DirectAccessWarning/>;
        }
    }
}

const mapStateToProps = state => {
    return {
        numberOfCorrectAnswers: state.gameData.gameState.correctAnswers,
        numberOfQuestions: state.gameData.serverData.questions.length,
        time: state.gameData.gameState.finishTime,
    }
}

export default connect(mapStateToProps, null)(ResultsPage);