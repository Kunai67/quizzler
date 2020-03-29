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
import { RedirectButton } from '../../components/functional/RedirectButton';
import LoadingScreen from '../../components/functional/LoadingScreen';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.props.fetchCategory();

        this.state = {
            categories: this.props.categories,
            category: this.props.settings.selectedCategory,
            difficulty: this.props.settings.difficulty,
            numOfQ: this.props.settings.numberOfQuestions,
            willRedirect: false
        }

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSelectChange(e) {
        switch (e.target.name) {
            case "category":
                this.setState({ category : Number(e.target.value) });
                break;
            case "difficulty":
                this.setState({ difficulty : e.target.value });
                break;
            default:
                break;
        }
    }

    onInputChange(e) {
        this.setState({ numOfQ: Number(e.target.value) });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.changeSettings(this.state.category, this.state.numOfQ, this.state.difficulty);
        this.setState({ willRedirect: true });
    }

    render() {
        if (!this.props.isFetching) {
            if(!this.state.willRedirect) {
                return (
                    <DefaultContainer>
                        <div>
                            <StyledMainHeading color={ WHITE }>Quizzler!</StyledMainHeading>
                            <SubHeading color={ BG }>Settings</SubHeading>
                            <FlexForm action="">
                                <Label htmlFor="category">Category</Label>
                                <Select 
                                name="category" 
                                id="categorySelect" 
                                onChange={ (e) => this.onSelectChange(e) }
                                defaultValue={ this.state.category }
                                >
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
                                <Select 
                                name="difficulty" 
                                id="difficultySelect" 
                                onChange={ (e) => this.onSelectChange(e) }
                                defaultValue={ this.state.difficulty }
                                >
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="difficult">Difficult</option>
                                </Select>
        
                                <Label htmlFor="numOfQ">Number of Questions</Label>
                                <Input name="numOfQ" id="numOfQInput" 
                                onChange={ (e) => this.onInputChange(e) }
                                defaultValue={ this.state.numOfQ }
                                />
    
                                <Div>
                                    <DefaultButton bg={ BG } color={ BLACK } onClick={ (e) => { this.onSubmit(e) } }>Save</DefaultButton>
                                    <RedirectButton to="/" bg={ ACCENT } color={ BLACK }>Cancel</RedirectButton>
                                </Div>
                            </FlexForm>
                        </div>
                    </DefaultContainer>
                ) 
            } 
            else {
                return <Redirect to="/" />;
            }
        }
        else {
            return <LoadingScreen />;
        }
    }
}

const mapStateToProps = state => {
    return {
        categories: state.gameData.serverData.categories,
        settings: state.gameSettings,
        isFetching: state.gameData.serverData.isFetching
    }
};

export default connect(mapStateToProps, { fetchCategory, changeSettings })(SettingsPage);