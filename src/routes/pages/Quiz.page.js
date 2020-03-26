import React from 'react';
import styled from 'styled-components';
import { WHITE, BG, PRIMARY, BLACK } from '../../res/color-palette';
import { DefaultContainer } from '../../components/styled/containers';
import { DefaultButton } from '../../components/styled/buttons';
import CogsLink from '../../res/svg/cogs.svg';
import CheckLink from '../../res/svg/checkmark-circle.svg';
import QuestionLink from '../../res/svg/question-circle.svg';
import BookLink from '../../res/svg/book.svg';

const Header = styled.div`
    background: ${ BLACK };
    padding: 2em;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-flow: column wrap;
        padding: 2em 1em;        
    }
`;

const HeaderP = styled.p`
    font-size: 4em;
    color: ${ WHITE };

    @media screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const HeaderMainP = styled(HeaderP)`
    font-weight: bold;
    
    @media screen and (max-width: 768px) {
        font-size: 2.5em;
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

    @media screen and (max-width: 768px) {
        justify-content: center;        
        margin-bottom: 2em;
    }
`;

const Icon = styled.img`
    width: 4em;
    margin: 0 2em;

    @media screen and (max-width: 768px) {
        width: 3em;
        margin: 0 1em;        
    }
`;

const BackgroundContainer = styled.div`
    height: 100vh;
    background: ${ BG };
`;

const QuizContainer = styled(DefaultContainer)`
    min-height: auto;
    flex-flow: column wrap;
    height: 80%;
`;

const Question = styled.p`
    font-size: 5em;
    color: ${ PRIMARY };
    margin: 1em 0.5em 2em 0.5em;

    @media screen and (max-width: 768px) {
        font-size: 3em;
    }

    @media screen and (min-width: 1441px) {
        font-size: 7em;
    }
`;

const ChoiceContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
`;

export default function QuizPage() {
    return (
        <BackgroundContainer>
            <Header>
                <CategoryDiv>
                    <Icon src={ BookLink } alt='Category: '/>
                    <HeaderMainP>General Knowledge</HeaderMainP>    
                </CategoryDiv>

                <Div>
                    <Div>
                        <Icon src={ QuestionLink } alt='Question: '/>
                        <HeaderP>1</HeaderP>
                    </Div>
                    <Div>
                        <Icon src={ CogsLink } alt='Difficulty: '/>
                        <HeaderP>Easy</HeaderP>
                    </Div>
                    <Div>
                        <Icon src={ CheckLink } alt='Question: '/>
                        <HeaderP>0 / 10</HeaderP>
                    </Div>
                </Div>                    
            </Header>
            <QuizContainer bg={ BG }>
                <Question>This is a sample question. What is the answer?</Question>

                <ChoiceContainer>
                    <ChoiceButton>Answer 1</ChoiceButton>
                    <ChoiceButton>Answer 2</ChoiceButton>
                    <ChoiceButton>Answer 3</ChoiceButton>
                    <ChoiceButton>Answer 4</ChoiceButton>
                </ChoiceContainer>
            </QuizContainer>
        </BackgroundContainer>
    )
}
