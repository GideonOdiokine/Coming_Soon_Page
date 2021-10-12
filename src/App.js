import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (

        <Router>
            <Switch>
                <Route exact path="/" component={Layout} />
            </Switch>
        </Router>
    )
}

export default App
