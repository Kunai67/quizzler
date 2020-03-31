import React from 'react';
import { DefaultContainer } from '../styled/utils/containers';
import RedirectButton from './RedirectButton';
import { HeaderMainP } from '../styled/pages/quiz.components';
import { BG } from '../../res/color-palette';
import { SubHeading } from '../styled/utils/headings';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ErrorMessage = styled(HeaderMainP)`
    margin-bottom: 2em;
    font-weight: 200;
`;

const Heading = styled(SubHeading)`
    margin: .25em;
    font-weight: bold;
`;

function ErrorScreen(props) {
    return (
        <DefaultContainer>
            <div>
                <Heading color={ BG }>Uh Oh! We stumbled upon an error!</Heading>
                <ErrorMessage>{ props.errorMessage }</ErrorMessage>
                <RedirectButton to="/">Back To Home</RedirectButton>
            </div>
        </DefaultContainer>
    )
}

const mapStateToProps = state => {
    return {
        errorMessage: state.gameData.gameState.errorMessage
    }
}

export default connect(mapStateToProps, null)(ErrorScreen);