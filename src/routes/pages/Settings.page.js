import React from 'react';
import styled from 'styled-components';
import { DefaultContainer } from '../../components/styled/containers';
import { DefaultButton } from '../../components/styled/buttons';
import { RedirectButton } from '../../components/functional/RedirectButton';
import { MainHeading, SubHeading } from '../../components/styled/headings';
import { WHITE, BG, ACCENT, BLACK } from '../../res/color-palette';

// REACT REDUX IMPORT
import { connect } from 'react-redux';
import { fetchCategory, changeSettings } from '../../redux/actions';

const StyledMainHeading = styled(MainHeading)`
    margin-bottom: -0.25em;
`;

const FlexForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const Label = styled.label`
    font-size: 2.5em;
    color: ${props => props.color ? props.color : WHITE};
    margin-bottom: 0.25em;

    @media screen and (max-width: 425px) {
        font-size: 1.75em;
    }

    @media screen and (min-width: 1440px) {
        font-size: 5em;
    }
`;

const Select = styled.select`
    padding: .75em .5em;
    font-size: 1.5em;
    margin-bottom: 1em;
    width: 50%;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${ BLACK };
`;

const Input = styled.input`
    padding: 1em .5em;
    font-size: 1.5em;
    margin-bottom: 1em;
    width: 15%;
    text-align: center;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${ BLACK };
`;

const Div = styled.div`
    margin-top: 3em;
`;

class SettingsPage extends React.Component {
    constructor(props) {
        super(props)

        this.props.fetchCategory();

        this.state = {
            categories: this.props.categories,
            category: this.props.settings.selectedCategory,
            difficulty: this.props.settings.difficulty,
            numOfQ: this.props.settings.numberOfQuestions
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
        console.log(this.state.category + '' + this.state.numOfQ + this.state.difficulty);
        this.props.changeSettings(this.state.category, this.state.numOfQ, this.state.difficulty);
    }

    render() {
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
                            <DefaultButton bg={ BG } color={ BLACK } onClick={ (e) => this.onSubmit(e) }>Save</DefaultButton>
                            <RedirectButton to="/" bg={ ACCENT } color={ BLACK }>Cancel</RedirectButton>
                        </Div>
                    </FlexForm>
                </div>
            </DefaultContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.serverData.categories,
        settings: state.gameSettings
    }
};

export default connect(mapStateToProps, { fetchCategory, changeSettings })(SettingsPage);