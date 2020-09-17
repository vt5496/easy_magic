import App from './App';

import store from "./redux/redux-store";

import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from "react-router-dom";

import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
    localStorage['react-redux'] = JSON.stringify(store.getState())
});



