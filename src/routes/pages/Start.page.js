import React from 'react';
import styled from 'styled-components';

// IMPORTING COMPONENTS
import { DefaultContainer } from '../../components/styled/containers';
import { MainHeading, SubHeading } from '../../components/styled/headings';
import { BG, PRIMARY, SECONDARY } from '../../res/color-palette';
import { RedirectButton } from '../../components/functional/RedirectButton';

// REACT REDUX IMPORTS
import { updateStatus, fetchQuestions } from '../../redux/actions';
import { connect } from 'react-redux';

const WelcomeHeading = styled(SubHeading)`
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

class StartPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleStart = this.handleStart.bind(this);
    }

    handleStart() {
        this.props.updateStatus(true);
    }    

    componentDidMount() {
        this.props.fetchQuestions(this.props.selectedCategory, this.props.numberOfQuestions, this.props.difficulty);
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

const mapStateToProps = state => {
    return state.gameSettings;
}

export default connect(mapStateToProps, { updateStatus, fetchQuestions })(StartPage);