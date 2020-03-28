// NPM IMPORTS
import React from 'react';
import { connect } from 'react-redux';

// RESOURCES IMPORTS
import { WHITE, BG } from '../../res/color-palette';
import FBIconLink from '../../res/svg/facebook.svg';
import TwitterIconLink from '../../res/svg/twitter.svg';
import IGIconLink from '../../res/svg/instagram.svg';

// COMPONENT IMPORTS
import { DefaultContainer } from '../../components/styled/utils/containers';
import { SubHeading } from '../../components/styled/utils/headings';
import DirectAccessWarning from '../../components/functional/DirectAccessWarning';
import { 
    Div, HomeLink, P, ResultSummary, 
    SocialContainer, SocialIcon, StyledMainHeading 
} from '../../components/styled/pages/results.components';


function ResultsPage(props) {
    if (props.numberOfQuestions !== 0) {
        return (
            <DefaultContainer>
                <div>
                    <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                    <SubHeading color={ BG }>Results</SubHeading>
                    <Div>
                        <P>Finish Time</P>
                        <P color={ BG }>{props.time.minutes} minutes, {props.time.seconds} seconds</P>
                    </Div>
                    <Div>
                        <P>Correct Answers</P>
                        <P color={ BG }>{ props.numberOfCorrectAnswers }/{ props.numberOfQuestions } Correct Answers</P>
                    </Div>
    
                    <ResultSummary>{ (props.numberOfCorrectAnswers / props.numberOfQuestions) >= 0.5 ? "You Passed! Congrats!" : "Sorry, you failed." }</ResultSummary>
                    <HomeLink to="/">Play Again?</HomeLink>
    
                    <P>Share on:</P>
                    <SocialContainer>
                        <SocialIcon src={FBIconLink} alt="Facebook"/>
                        <SocialIcon src={TwitterIconLink} alt="Twitter"/>
                        <SocialIcon src={IGIconLink} alt="Instagram"/>
                    </SocialContainer>
    
                    
                </div>
            </DefaultContainer>
        ) 
    }
    else {
        return <DirectAccessWarning/>;
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