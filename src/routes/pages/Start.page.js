// NPM IMPORTS
import React from 'react';

// RESOURCES IMPORTS
import { BG, PRIMARY, SECONDARY } from '../../res/color-palette';

// COMPONENT IMPORTS
import { DefaultContainer } from '../../components/styled/utils/containers';
import { MainHeading } from '../../components/styled/utils/headings';
import { RedirectButton } from '../../components/functional/RedirectButton';
import { WelcomeHeading } from '../../components/styled/pages/start.components';

// REACT REDUX IMPORTS
import { updateStatus, clearGameData, requestQuestions } from '../../redux/actions';
import { connect } from 'react-redux';


class StartPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleStart = this.handleStart.bind(this);
    }

    componentDidMount() {
        this.props.clearGameData();
    }

    handleStart() {
        this.props.updateStatus(true);
        this.props.requestQuestions();
    }    

    render() {
        return (
            <DefaultContainer bg={BG}>
                <div>
                    <WelcomeHeading color={PRIMARY}>Welcome to</WelcomeHeading>
                    <MainHeading>Quizzler!</MainHeading>
                    <RedirectButton bg={ PRIMARY } to='/quiz' onClick={ this.handleStart }>Start Game</RedirectButton>
                    <RedirectButton bg={ SECONDARY } to='/settings'>Settings</RedirectButton>
                </div>
            </DefaultContainer>
        )
    }
}

export default connect(null, { updateStatus, clearGameData, requestQuestions })(StartPage);