import React from 'react';
import styled from 'styled-components';
import { DefaultContainer } from '../../components/styled/containers';
import { MainHeading, SubHeading } from '../../components/styled/headings';
import { WHITE, BG } from '../../res/color-palette';
import FBIconLink from '../../res/svg/facebook.svg';
import TwitterIconLink from '../../res/svg/twitter.svg';
import IGIconLink from '../../res/svg/instagram.svg';
import { Link } from 'react-router-dom';
import DirectAccessWarning from '../../components/functional/DirectAccessWarning';

// REACT REDUX
import { connect } from 'react-redux';

const StyledMainHeading = styled(MainHeading)`
    margin-bottom: -0.25em;
`;

const P = styled.p`
    font-size: 3em;
    color: ${props => props.color ? props.color : WHITE};

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4em;
    }
`;

const Div = styled.div`
    margin-bottom: 3em;
`;

const ResultSummary = styled.h2`
    font-size: 5em;
    color: ${ WHITE };
    text-transform: uppercase;
    letter-spacing: 1.2px;

    @media screen and (max-width: 425px) {
        font-size: 4em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 8em;
    }
`;

const SocialContainer = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin: 1em auto;
`;

const SocialIcon = styled.img`
    width: 5em;
    margin: 0 1em;
`;

const HomeLink = styled(Link)`
    font-size: 2em;
    display: block;
    margin-bottom: 1.5em;
    color: ${props => props.color ? props.color : BG};

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4em;
    }
`;

function ResultsPage(props) {
    if (props.isStarted) {
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
        isStarted: state.gameData.gameState.isStarted
    }
}

export default connect(mapStateToProps, null)(ResultsPage);