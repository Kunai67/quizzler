import React from 'react';
import styled from 'styled-components';
import { FullscreenContainer } from '../../components/containers';
import { BoldButton } from '../../components/buttons';
import { MainHeading, SubHeading } from '../../components/headings';
import { WHITE, BG, ACCENT, BLACK } from '../../res/color-palette';

const MainContainer = styled(FullscreenContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledMainHeading = styled(MainHeading)`
    font-size: 10em;
    margin-bottom: -0.25em;

    @media screen and (max-width: 425px) {
        font-size: 8em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 15em;
    }
`;

const StyledSubHeading = styled(SubHeading)`
    font-size: 4.5em;
    margin-bottom: 1em;

    @media screen and (max-width: 425px) {
        font-size: 1.75em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 8em;
    }
`;

const FlexForm = styled.form`
    display: flex;
    flex-flow: column wrap;
`;

export default function SettingsPage() {
    return (
        <MainContainer>
            <div>
                <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                <StyledSubHeading color={ BG }>Settings</StyledSubHeading>
                <FlexForm action="">
                    <label htmlFor="">Select Quiz Source</label>
                    <select name="" id="">
                        <option>Sample 1</option>
                        <option>Sample 2</option>
                        <option>Sample 3</option>
                    </select>

                    <label htmlFor="">Number of Questions</label>
                    <input type="number" name="" id="" value="3"/>

                    <label htmlFor="">Difficulty</label>
                    <select name="" id="">
                        <option value="">Easy</option>
                        <option value="">Medium</option>
                        <option value="">Difficult</option>
                    </select>

                    <div>
                        <BoldButton bg={ BG } color={ BLACK }>Save</BoldButton>
                        <BoldButton bg={ ACCENT }color={ BLACK }>Cancel</BoldButton>
                    </div>
                </FlexForm>
            </div>
        </MainContainer>
    )
}
