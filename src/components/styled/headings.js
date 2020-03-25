import styled from 'styled-components';
import { BLACK } from '../../res/color-palette';

const MainHeading = styled.h1`
    font-size: 12em;
    font-weight: 200;
    color: ${props => props.color ? props.color : BLACK};

    @media screen and (min-width: 1440px) {
        font-size: 18em;
    }

    @media screen and (max-width: 425px) {
        font-size: 9em;
    }    
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