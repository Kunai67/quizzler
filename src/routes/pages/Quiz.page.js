import React from 'react';
import styled from 'styled-components';
import { WHITE, BG, PRIMARY, BLACK } from '../../res/color-palette';
import { DefaultContainer } from '../../components/styled/containers';
import { DefaultButton } from '../../components/styled/buttons';
import CogsLink from '../../res/svg/cogs.svg';
import CheckLink from '../../res/svg/checkmark-circle.svg';
import QuestionLink from '../../res/svg/question-circle.svg';

const Header = styled.div`
    background: ${ BLACK };
    padding: 2em;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
        display: block;        
    }
`;

const HeaderP = styled.p`
    font-size: 4em;
    color: ${ WHITE };

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }
`;

const HeaderMainP = styled(HeaderP)`
    font-weight: bold;
    @media screen and (max-width: 425px) {
        text-align: center;
        margin: 1em 0;
        font-size: 3em;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 425px) {
        justify-content: start;        
    }
`;

const Icon = styled.img`
    width: 4em;
    margin: 0 2em;
`;

const BackgroundContainer = styled.div`
    height: 100vh;
    background: ${ BG };
`;

const QuizContainer = styled(DefaultContainer)`
    min-height: auto;
    flex-flow: column wrap;
`;

const Question = styled.p`
    font-size: 7em;
    color: ${ PRIMARY };
    margin: 10em 0;
`;

const ChoiceContainer = styled.div`
    width: 60%;
    margin: 0 auto 5em auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ChoiceButton = styled(DefaultButton)`
    flex-basis: 40%;
    margin-bottom: 5em;
    padding: 5em;
    font-size: 3em;
`;

export default function QuizPage() {
    return (
        <BackgroundContainer>
            <Header>
                <Div>
                    <Div>
                        <Icon src={ QuestionLink } alt='Question: '/>
                        <HeaderP>1</HeaderP>
                    </Div>
                    <Div>
                        <Icon src={ CogsLink } alt='Difficulty: '/>
                        <HeaderP>Easy</HeaderP>
                    </Div>
                </Div>
                <HeaderMainP>Category: General Knowledge</HeaderMainP>                    
                <Div>
                    <Icon src={ CheckLink } alt='Question: '/>
                    <HeaderP>0 / 10</HeaderP>
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
