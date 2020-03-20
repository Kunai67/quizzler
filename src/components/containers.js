import styled from 'styled-components';
import { BLACK } from '../res/color-palette';

const Container = styled.div`
    background: ${props => props.bg ? props.bg : BLACK};
    text-align: center;
`;

const FullscreenContainer = styled(Container)`
    width: 100vw;
    height: 100vh;
`;

export {
    Container, FullscreenContainer
}