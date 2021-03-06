import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../Home'
import LoginContainer from '../LoginContainer'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginContainer} />
                </Switch>
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
