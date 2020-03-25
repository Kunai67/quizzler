import React from 'react';
import { FullscreenContainer } from '../../components/containers';
import { Button } from '../../components/buttons';
import { MainHeading, SubHeading } from '../../components/headings';
import { BG, PRIMARY, SECONDARY } from '../../res/color-palette';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const MainContainer = styled(FullscreenContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WelcomeHeading = styled(SubHeading)`
    margin-bottom: -1em;
    font-weight: normal;
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

const StyledButton = styled(Button)`
    margin: 0 1em;
`;

function RedirectButton(props) {
    const history = useHistory();

    return (
        <StyledButton bg={props.bg} onClick={ () => history.push(props.to) }>{ props.children }</StyledButton>
    )
}

export default function StartPage() {
    return (
        <MainContainer bg={BG}>
            <div>
                <WelcomeHeading color={PRIMARY}>Welcome to</WelcomeHeading>
                <StyledMainHeading>Quizzler!</StyledMainHeading>
                <RedirectButton bg={ PRIMARY } to='/quiz'>Start Game</RedirectButton>
                <RedirectButton bg={ SECONDARY } to='/settings'>Settings</RedirectButton>
            </div>
        </MainContainer>
    )
}
