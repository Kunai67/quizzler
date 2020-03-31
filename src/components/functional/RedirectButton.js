import React from 'react';
import { DefaultButton } from '../styled/utils/buttons';
import { useHistory } from 'react-router-dom';

export default function RedirectButton(props) {
    const history = useHistory();

    return (
        <DefaultButton bg={props.bg} color={ props.color } onClick={ () => {
            if (props.onClick) {
                props.onClick();
            }
            history.push(props.to); 
        }}>{ props.children }</DefaultButton>
    )
}