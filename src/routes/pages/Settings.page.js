// NPM IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// REDUX ACTION CREATORS
import { fetchCategory, changeSettings } from '../../redux/actions';

// RESOURCES IMPORTS
import { WHITE, BG, ACCENT, BLACK } from '../../res/color-palette';

//COMPONENT IMPORTS
import { DefaultContainer } from '../../components/styled/utils/containers';
import { DefaultButton } from '../../components/styled/utils/buttons';
import { SubHeading } from '../../components/styled/utils/headings';
import {
    StyledMainHeading, FlexForm, Label,
    Select, Input, Div
} from '../../components/styled/pages/settings.components';
import RedirectButton from '../../components/functional/RedirectButton';
import LoadingScreen from '../../components/functional/LoadingScreen';
import Modal from '../../components/functional/Modal';
import ErrorScreen from '../../components/functional/ErrorScreen';


class SettingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: this.props.categories,
            showModal: false
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategory();
        this.setState({
            category: this.props.settings.category,
            numOfQ: this.props.settings.numberOfQuestions,
            difficulty: this.props.settings.difficulty,
            choiceType: this.props.settings.choiceType
        });
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.changeSettings(this.state.category, this.state.numOfQ, this.state.difficulty, this.state.choiceType);
        this.setState({ showModal: true });
    }

    render() {
        if (this.props.isFetching) {
            if (this.props.errorMessage) {
                return <ErrorScreen />;
            } else {
                return <LoadingScreen />;
            }
        }
        else {
            if(this.state.willRedirect) {
                return <Redirect to="/" />;
            } 
            else {
                return (
                    <DefaultContainer>
                        <div>
                            <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                            <SubHeading color={ BG }>Settings</SubHeading>
                            <FlexForm>
                                <Label htmlFor="category">Category</Label>
                                {/* RENDERS A SELECT ELEMENT WITH OPTIONS 
                                DEPENDING ON CATEGORIES THAT HAS BEEN RETRIEVED FROM THE SERVER*/}
                                <Select name="category" onChange={ (e) => this.onInputChange(e) } defaultValue={ this.props.settings.selectedCategory }>
                                    {
                                        this.props.categories.map(category => 
                                            (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                            )
                                        )
                                    }
                                </Select>
                                <Label htmlFor="difficulty">Difficulty</Label>
                                <Select name="difficulty" onChange={ (e) => this.onInputChange(e) } defaultValue={ this.props.settings.difficulty }>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="difficult">Difficult</option>
                                </Select>
                                <Label htmlFor="choiceType">Question Type</Label>
                                <Select name="choiceType" onChange={ (e) => this.onInputChange(e) } defaultValue={ this.props.settings.choiceType }>
                                    <option value="multiple">Multiple Choice</option>
                                    <option value="boolean">True or False</option>
                                </Select>
                                <Label htmlFor="numOfQ">Number of Questions</Label>
                                <Input name="numOfQ" onChange={ (e) => this.onInputChange(e) } defaultValue={ this.props.settings.numberOfQuestions }/>
                                
                                <Div>
                                    <DefaultButton bg={ BG } color={ BLACK } onClick={ (e) => { this.onSubmit(e) } }>Save</DefaultButton>
                                    <RedirectButton to="/" bg={ ACCENT } color={ BLACK }>Back to Home</RedirectButton>
                                </Div>
                            </FlexForm>
                        </div>
                        <Modal 
                        isShown={ this.state.showModal } 
                        headerText="Settings Updated" type="success"
                        toggleVisibility={() => this.setState({ showModal: false })}
                        >
                            Your settings has been updated successfully.
                        </Modal>
                    </DefaultContainer>
                ) 
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        categories: state.gameData.serverData.categories,
        settings: state.gameSettings,
        isFetching: state.gameData.serverData.isFetching,
        errorMessage: state.gameData.gameState.errorMessage
    }
};

export default connect(mapStateToProps, { fetchCategory, changeSettings })(SettingsPage);