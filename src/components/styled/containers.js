import styled from 'styled-components';
import { BLACK } from '../../res/color-palette';

const DefaultContainer = styled.div`
    background: ${props => props.bg ? props.bg : BLACK};
    text-align: center;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    DefaultContainer
}