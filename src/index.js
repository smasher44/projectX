import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { searchRobots } from './reducer';
import { Provider} from 'react-redux';
import { createStore } from 'redux'; // use to create a store


const store = createStore(searchRobots)
    /* store: is massive javascript object that contains the state of the app*/


ReactDOM.render( <Provider store={store}>
                    <App />
                </Provider>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
