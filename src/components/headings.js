import styled from 'styled-components';
import { BLACK } from '../res/color-palette';

const MainHeading = styled.h1`
    font-size: 12em;
    font-weight: 200;
    color: ${props => props.color ? props.color : BLACK};
`;

const SubHeading = styled.p`
    font-size: 4em;
    font-weight: 200;
    color: ${props => props.color ? props.color : BLACK};
`;

export {
    MainHeading,
    SubHeading
}