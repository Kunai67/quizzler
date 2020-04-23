// NPM IMPORTS
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// RESOURCES IMPORTS
import { BLACK, WHITE, BG, PRIMARY } from '../../../res/color-palette';

// COMPONENT IMPORTS
import { DefaultButton } from '../../styled/utils/buttons';

const Header = styled.div`
    background: ${ BLACK };
    padding: 2em;
    display: flex;

    @media screen and (max-width: 1024px) {
        flex-flow: column wrap;
        padding: 2em 1em;        
    }
`;

const HeaderP = styled.p`
    font-size: 3em;
    color: ${ WHITE };

    @media screen and (max-width: 768px) {
        font-size: 1.5em;
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
        font-size: 2em;
    }
`;

const HeaderMainP = styled(HeaderP)`
    font-weight: bold;
    
    @media screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 600px) and (max-width: 768px) {
        justify-content: space-around;        
    }
`;

const CategoryDiv = styled(Div)`
    flex-grow: 1;
    justify-content: start;

    @media screen and (max-width: 1024px) {
        justify-content: center;        
        margin-bottom: 2em;
    }
`;

const Icon = styled.img`
    width: 3.5em;
    margin: 0 2em;

    @media screen and (max-width: 768px) {
        width: 2.5em;
        margin: 0 1em;        
    }

    @media screen and (max-width: 400px) {
        width: 2em;
        margin: 0 .5em;        
    }
`;

const BackgroundContainer = styled.div`
    min-height: 100vh;
    background: ${ BG };
    position: relative;
`;

const QuizContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: auto;
    text-align: center;
    align-items: center;
    padding: 2em 0;
    max-width: max(100em, 60%);
    margin: 0 auto;
`;

const Question = styled.p`
    font-size: 4em;
    color: ${ PRIMARY };
    margin: 1em 0.5em 2em 0.5em;

    @media screen and (min-width: 1440px) {
        font-size: 5em;
    }

    @media screen and (max-width: 768px) {
        font-size: 3em;
    }

    @media screen and (max-width: 400px) {
        font-size: 2.5em;      
    }
`;

const ChoiceContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const ChoiceButton = styled(DefaultButton)`
    flex-basis: 40%;
    margin-bottom: 1em;

    @media screen and (max-width: 600px) {
        padding: 1em;
        flex-basis: 80%;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.25em;      
    }
`;

const ExitButton = styled(Link)`
    margin-left: 1em;
    background: ${ WHITE };
    padding: 1em 0;
    border-radius: 20px;
`;

export {
    Header, HeaderMainP, HeaderP,
    Div, CategoryDiv, Icon,
    Question, ChoiceButton, ExitButton,
    ChoiceContainer, QuizContainer, BackgroundContainer
}