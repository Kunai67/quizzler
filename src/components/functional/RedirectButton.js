import React from 'react';
import { DefaultButton } from '../../components/styled/buttons';
import { useHistory } from 'react-router-dom';

export function RedirectButton(props) {
    const history = useHistory();

    return (
        <DefaultButton bg={props.bg} color={ props.color } onClick={ () => {
            props.onClick();
            history.push(props.to); 
        }}>{ props.children }</DefaultButton>
    )
}