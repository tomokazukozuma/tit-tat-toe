import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'

// container
import Game from './containers/Game'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}> 
        <Game />
    </Provider>,
    document.getElementById('root')
);