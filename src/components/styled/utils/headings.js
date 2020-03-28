import styled from 'styled-components';
import { BLACK } from '../../../res/color-palette';

const MainHeading = styled.h1`
    font-size: 12em;
    font-weight: 200;
    color: ${props => props.color ? props.color : BLACK};
    margin-bottom: .25em;

    @media screen and (min-width: 1440px) {
        font-size: 15em;
    }

    @media screen and (max-width: 425px) {
        font-size: 7em;
    }    
`;

const SubHeading = styled.p`
    font-size: 4.5em;
    font-weight: 200;
    color: ${props => props.color ? props.color : BLACK};
    margin-bottom: 1em;

    @media screen and (max-width: 425px) {
        font-size: 3em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 7em;
    }
`;

export {
    MainHeading,
    SubHeading
}