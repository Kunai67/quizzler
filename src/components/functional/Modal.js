import React from 'react';
import styled from 'styled-components';

import { BG, WHITE, SECONDARY } from '../../res/color-palette';
import { DefaultButton } from '../styled/utils/buttons';

// PROPS: type, isShown, headerText, toggleVisibility
function Modal(props) {
    let mainColor;
        
    switch (props.type) {
        case 'success':
            mainColor = 'green';
            break;
        case 'warning':
            mainColor = { BG };
            break;
        case 'error':
            mainColor = "red";
            break;
        default:
            mainColor = { SECONDARY };
            break;
    };

    if (props.isShown) {
        return (
            <ModalContainer>
                <Container>
                    <Header bg={mainColor}>
                        <HeaderText>{props.headerText}</HeaderText>
                    </Header>
                    <Body>
                        <BodyText color={mainColor}>{props.children}</BodyText>
                    </Body>
                    <ModalButton bg={mainColor} onClick={() => props.toggleVisibility() }>OK</ModalButton>
                </Container>
            </ModalContainer>
        )
    } else {
        return <React.Fragment/>;
    }
}

const ModalButton = styled(DefaultButton)`
    bottom: 2em;
    color: ${ WHITE };
    background: ${(props) => props.bg}; 
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ModalContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0%;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
`;

const Container = styled.div`
    position: relative;
    background: ${ WHITE };
    width: clamp(30em, 50%, 50em);
`;

const Header = styled.div`
    width: 100%;
    padding: 2em;
    color: ${ WHITE };
    background: ${(props) => props.bg};
`;

const HeaderText = styled.h2`
    font-size: 2.5em;
`;

const BodyText = styled.p`
    font-size: 3em;
    color: ${(props) => props.color};

    @media screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const Body = styled.div`
    width: 100%;
    height: 50%;
    padding: 2em;
    background: ${ WHITE };
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default Modal;