import { SubHeading } from '../utils/headings';
import styled from 'styled-components';

export const WelcomeHeading = styled(SubHeading)`
    margin-bottom: -1em;
    font-weight: normal;
    font-size: 3em;

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4em;
    }
`;
