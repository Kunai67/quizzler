import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SettingsPage, ResultsPage, QuizPage, StartPage } from './routes';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/settings">
                    <SettingsPage/>
                </Route>
                <Route path="/result">
                    <ResultsPage/>
                </Route>
                <Route path="/quiz">
                    <QuizPage/>
                </Route>
                <Route path="/">
                    <StartPage/>
                </Route>
            </Switch>
        </Router>
    )
}

