import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";


import Nav from './components/Nav'

import Home from "./components/home/home";
import Favorites from './components/favorites/favorites';
import Search from './components/search/search';
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import Profile from "./components/profile/profile";


import s from './App.module.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/home' render={() => <Home user={props.state.user} catalog={props.state.catalog} dispatch={props.dispatch}/>}/>
                <Route path='/favorites' render={() => <Favorites user={props.state.user} catalog={props.state.catalog} dispatch={props.dispatch}/>}/>
                <Route path='/search' render={() => <Search user={props.state.user} catalog={props.state.catalog} findText={props.state.finder.text} dispatch={props.dispatch}/>}/>
                <Route path='/shopcart' render={() => <ShoppingCart />}/>
                <Route path='/profile' render={() => <Profile />}/>

                <Nav />
            </div>
        </BrowserRouter>
    )
};

export default App;
