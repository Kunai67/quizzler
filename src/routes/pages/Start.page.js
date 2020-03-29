// NPM IMPORTS
import React from 'react';
import { connect } from 'react-redux';

// REDUX ACTION CREATORS
import { updateStatus, clearGameData, requestQuestions } from '../../redux/actions';

// RESOURCES IMPORTS
import { BG, PRIMARY, SECONDARY } from '../../res/color-palette';

// COMPONENT IMPORTS
import { DefaultContainer } from '../../components/styled/utils/containers';
import { MainHeading } from '../../components/styled/utils/headings';
import { RedirectButton } from '../../components/functional/RedirectButton';
import { WelcomeHeading } from '../../components/styled/pages/start.components';
import Modal from '../../components/functional/Modal';


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
                <Modal isShown={this.props.isSettingsModified === true ? true : false } headerText="Settings Updated" type="success">
                    Your settings has been updated successfully.
                </Modal>
            </DefaultContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSettingsModified: state.gameSettings.isModified
    }
}

export default connect(mapStateToProps, { updateStatus, clearGameData, requestQuestions })(StartPage);