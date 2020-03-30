// NPM IMPORTS
import styled from 'styled-components';

// RESOURCES IMPORTS
import { WHITE, BLACK } from '../../../res/color-palette';

// COMPONENT IMPORTS
import { MainHeading } from '../../styled/utils/headings';

const StyledMainHeading = styled(MainHeading)`
    font-size: 8em;
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
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${ BLACK };
`;

const Input = styled.input`
    padding: 1em .5em;
    font-size: 1.5em;
    margin-bottom: 1em;
    width: 15%;
    text-align: center;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${ BLACK };
`;

const Div = styled.div`
    margin-top: 2em;
`;

export {
    StyledMainHeading, FlexForm, Label,
    Select, Input, Div
}