import React from 'react';
import { DefaultContainer } from '../styled/utils/containers';
import { HeaderMainP } from '../styled/pages/quiz.components';

export default function LoadingScreen() {
    return (
        <DefaultContainer>
            <HeaderMainP>Loading...</HeaderMainP>
        </DefaultContainer>
    )
}
