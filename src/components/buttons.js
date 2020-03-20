import styled from 'styled-components';
import { PRIMARY, WHITE } from '../res/color-palette';

const Button = styled.button`
    padding: 1em 2em;
    background: ${props => props.bg ? props.bg : PRIMARY};
    border: 0;
    font-size: 2em;
    color: ${props => props.color ? props.color : WHITE};
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const BoldButton = styled(Button)`
    font-weight: bold;
`;

export {
    Button,
    BoldButton
}