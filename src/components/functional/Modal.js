import React from 'react';
import styled from 'styled-components';

import { BG, WHITE, SECONDARY } from '../../res/color-palette';
import { DefaultButton } from '../styled/utils/buttons';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isShown: Boolean(this.props.isShown)
        }
    }

    render() {
        let mainColor;
        
        switch (this.props.type) {
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

        if (this.state.isShown) {
            return (
                <ModalContainer>
                    <Container>
                        <Header bg={mainColor}>
                            <HeaderText>{this.props.headerText}</HeaderText>
                        </Header>
                        <Body>
                            <BodyText color={mainColor}>{this.props.children}</BodyText>
                        </Body>
                        <ModalButton bg={mainColor} onClick={() => this.setState({ isShown: false })}>OK</ModalButton>
                    </Container>
                </ModalContainer>
            )
        } else {
            return <React.Fragment/>;
        }
    }
}

const ModalButton = styled(DefaultButton)`
    position: absolute;
    left: 50%;
    bottom: 2em;
    color: ${ WHITE };
    background: ${(props) => props.bg}; 
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transform: translateX(-50%);
    margin: 0;
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
`;

const Container = styled.div`
    position: relative;
    background: ${ WHITE };
    width: 50%;
    height: 50%;
`;

const Header = styled.div`
    width: 100%;
    padding: 2em;
    color: ${ WHITE };
    background: ${(props) => props.bg};
`;

const HeaderText = styled.h2`
    font-size: 3em;
`;

const BodyText = styled.p`
    font-size: 3em;
    color: ${(props) => props.color};
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