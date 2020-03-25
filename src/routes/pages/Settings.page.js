import React from 'react';
import styled from 'styled-components';
import { DefaultContainer } from '../../components/styled/containers';
import { DefaultButton } from '../../components/styled/buttons';
import { MainHeading, SubHeading } from '../../components/styled/headings';
import { WHITE, BG, ACCENT, BLACK } from '../../res/color-palette';

const StyledMainHeading = styled(MainHeading)`
    margin-bottom: -0.25em;
`;

const FlexForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const Label = styled.label`
    font-size: 2.5em;
    color: ${props => props.color ? props.color : WHITE};
    margin-bottom: 0.25em;

    @media screen and (max-width: 425px) {
        font-size: 1.75em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 5em;
    }
`;

const Select = styled.select`
    padding: .75em .5em;
    font-size: 1.5em;
    margin-bottom: 1em;
    width: 50%;
`;

const Input = styled.input`
    padding: 1em .5em;
    font-size: 1.5em;
    margin-bottom: 1em;
    width: 15%;
    text-align: center;
`;

const Div = styled.div`
    margin-top: 3em;
`;

export default function SettingsPage() {
    return (
        <DefaultContainer>
            <div>
                <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                <SubHeading color={ BG }>Settings</SubHeading>
                <FlexForm action="">
                    <Label htmlFor="">Category</Label>
                    <Select name="" id="">
                        <option value="">Sample 1</option>
                        <option value="">Sample 2</option>
                        <option value="">Sample 3</option>
                    </Select>

                    <Label htmlFor="">Difficulty</Label>
                    <Select name="" id="">
                        <option value="">Easy</option>
                        <option value="">Medium</option>
                        <option value="">Difficult</option>
                    </Select>

                    <Label htmlFor="">Number of Questions</Label>
                    <Input name="" id="" value="3"/>

                    <Div>
                        <DefaultButton bg={ BG } color={ BLACK }>Save</DefaultButton>
                        <DefaultButton bg={ ACCENT }color={ BLACK }>Cancel</DefaultButton>
                    </Div>
                </FlexForm>
            </div>
        </DefaultContainer>
    )
}
