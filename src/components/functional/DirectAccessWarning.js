import React from 'react';
import { DefaultContainer } from '../../components/styled/containers';
import { WHITE, BG } from '../../res/color-palette';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackToHome = styled(Link)`
    flex-grow: 1;
    color: ${ BG };
    display: inline-block;
    margin-top: 1em;
    font-size: 2em;
`;

const WarningP = styled.p`
    font-weight: bold;
    font-size: 3em;
    color: ${ WHITE };
    
    @media screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

export default function DirectAccessWarning() {
    return (
        <DefaultContainer>
            <div>
                <WarningP>Looks like you came here directly.</WarningP>
                <BackToHome to="/">Back to Home</BackToHome>
            </div>
        </DefaultContainer>
    )
}
