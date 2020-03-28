// NPM IMPORTS
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// RESOURCES IMPORTS
import { WHITE, BG } from '../../../res/color-palette';

// COMPONENT IMPORTS
import { MainHeading } from '../utils/headings';

const StyledMainHeading = styled(MainHeading)`
    margin-bottom: -0.25em;
`;

const P = styled.p`
    font-size: 3em;
    color: ${props => props.color ? props.color : WHITE};

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4em;
    }
`;

const Div = styled.div`
    margin-bottom: 3em;
`;

const ResultSummary = styled.h2`
    font-size: 5em;
    color: ${ WHITE };
    text-transform: uppercase;
    letter-spacing: 1.2px;

    @media screen and (max-width: 425px) {
        font-size: 4em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 8em;
    }
`;

const SocialContainer = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    width: 30%;
    margin: 1em auto;
`;

const SocialIcon = styled.img`
    width: 5em;
    margin: 0 1em;
`;

const HomeLink = styled(Link)`
    font-size: 2em;
    display: block;
    margin-bottom: 1.5em;
    color: ${props => props.color ? props.color : BG};

    @media screen and (max-width: 425px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 4em;
    }
`;

export {
    StyledMainHeading, P, Div,
    ResultSummary, SocialContainer, SocialIcon,
    HomeLink
}