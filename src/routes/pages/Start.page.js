import React from 'react';
import { FullscreenContainer } from '../../components/containers';
import { Button, BoldButton } from '../../components/buttons';
import { MainHeading, SubHeading } from '../../components/headings';
import { ACCENT, BG, BLACK, WHITE, PRIMARY, SECONDARY } from '../../res/color-palette';
import styled from 'styled-components';

const MainContainer = styled(FullscreenContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WelcomeHeading = styled(SubHeading)`
    margin-bottom: -1em;
    font-size: 3em;

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4em;
    }
`;

const StyledMainHeading = styled(MainHeading)`
    font-size: 12em;
    margin-bottom: .25em;
    @media screen and (max-width: 425px) {
        font-size: 9em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 18em;
    }
`;

const StyledBoldButton = styled(BoldButton)`
    margin: 0 1em;

    @media screen and (max-width: 425px) {
        font-size: 1.5em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 3em;
    }
`;

export default function StartPage() {
    return (
        <MainContainer bg={BG}>
            <div>
                <WelcomeHeading color={PRIMARY}>Welcome to</WelcomeHeading>
                <StyledMainHeading>Quizzler</StyledMainHeading>
                <StyledBoldButton bg={PRIMARY}>Start Game</StyledBoldButton>
                <StyledBoldButton bg={SECONDARY}>Settings</StyledBoldButton>
            </div>
        </MainContainer>
    )
}
