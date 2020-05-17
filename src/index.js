import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import store from './store'
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);