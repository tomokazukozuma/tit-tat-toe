import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'

// container
import Game from './containers/Game'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/game" component={Game} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);