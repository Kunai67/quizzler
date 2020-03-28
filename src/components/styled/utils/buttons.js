import styled from 'styled-components';
import { PRIMARY, WHITE } from '../../../res/color-palette';

const DefaultButton = styled.button`
    padding: 1em 2em;
    background: ${ props => props.bg ? props.bg : PRIMARY };
    border: 0;
    border-radius: 20px;
    font-size: 2em;
    color: ${ props => props.color ? props.color : WHITE };
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    margin: 0 1em;

    @media screen and (max-width: 425px) {
        font-size: 1.5em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 3em;
    }
`;

export {
    DefaultButton
}