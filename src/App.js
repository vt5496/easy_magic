import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";


import Nav from './components/Nav'

import Home from "./components/home/home";
import Favorites from './components/favorites/favorites';
import Search from './components/search/search';
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import Profile from "./components/profile/profile";

import Authorization from "./components/authorization/authorization";
import Registration from "./components/registration/registration";


import s from './App.module.css';

const App = (props) => {

    return (
        <BrowserRouter>
            <div>
                <Route path='/home' render={() => <Home state={props.state} dispatch={props.dispatch}/>}/>
                <Route path='/favorites' render={() => <Favorites state={props.state} dispatch={props.dispatch}/>}/>
                <Route path='/search' render={() => <Search user={props.state.user} catalog={props.state.catalog} findText={props.state.finder.text} dispatch={props.dispatch}/>}/>
                <Route path='/shopcart' render={() => <ShoppingCart />}/>
                <Route path='/profile' render={() => <Profile />}/>

                <Route path='/authorization' render={() => <Authorization users={props.state.users} authorization={props.state.newUser[0]} dispatch={props.dispatch}/>} />
                <Route path='/registration' render={() => <Registration users={props.state.users} registration={props.state.newUser[1]} dispatch={props.dispatch}/>} />

                <Nav />
            </div>
        </BrowserRouter>
    )
};

export default App;
