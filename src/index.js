import React from 'react';
import ReactDOM from "react-dom";
import Pages from './pages/Pages';
import store from './redux/store'
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-less/semantic.less';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);