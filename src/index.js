import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router'

import requireAuth from './components/hoc/RequireAuth.jsx';
import App from './components/app';
import Resources from './components/Resources.jsx';
import Forbidden from './components/Forbidden.jsx';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/resources" component={requireAuth(Resources)}/>
                <Route path="/forbidden" component={Forbidden}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
