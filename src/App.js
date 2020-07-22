import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";


import Nav from './components/Nav'

import Search from './components/search/Search';
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Profile from "./components/profile/Profile";

import Authorization from "./components/authorization/Authorization";
import Registration from "./components/registration/Registration";


import s from './app.module.css';

import CatalogContainer from "./components/home/catalog/CatalogContainer";
import FavoritesContainer from "./components/favorites/FavoritesContainer";
import HomeContainer from "./components/home/HomeContainer";


const App = () => {
    return (
            <div  className={s.container}>
                <Route path='/home' render={() => <HomeContainer />}/>
                <Route path='/favorites' render={() => <FavoritesContainer />}/>
                <Route path='/search' render={() => <Search />}/>
                <Route path='/shopcart' render={() => <ShoppingCart />}/>
                <Route path='/profile' render={() => <Profile />}/>

                <Route path='/authorization' render={() => <Authorization />} />
                <Route path='/registration' render={() => <Registration />} />

                <Route path='/catalog' render={() => <CatalogContainer />} />

                <Nav />
            </div>
    )
};

export default App;
