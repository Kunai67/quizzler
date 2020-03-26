import React from 'react';
import styled from 'styled-components';
import { DefaultContainer } from '../../components/styled/containers';
import { MainHeading, SubHeading } from '../../components/styled/headings';
import { WHITE, BG, PRIMARY } from '../../res/color-palette';
import FBIconLink from '../../res/svg/facebook.svg';
import TwitterIconLink from '../../res/svg/twitter.svg';
import IGIconLink from '../../res/svg/instagram.svg';

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
    margin-bottom: .5em;

    @media screen and (max-width: 425px) {
        font-size: 4em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 8em;
    }
`;

const SocialContainer = styled.div`
    padding: 3em;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin: 1em auto;
`;

const SocialIcon = styled.img`
    width: 5em;
`;

export default function ResultsPage() {
    return (
        <DefaultContainer bg={ PRIMARY }>
            <div>
                <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                <SubHeading color={ BG }>Results</SubHeading>
                <Div>
                    <P>Finish Time</P>
                    <P color={ BG }>8 minutes, 25 seconds</P>
                </Div>
                <Div>
                    <P>Correct Answers</P>
                    <P color={ BG }>10/10 Correct Answers</P>
                </Div>

                <ResultSummary>You Passed! Congrats!</ResultSummary>

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
