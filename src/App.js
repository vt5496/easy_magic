import React from 'react';
import {Route} from "react-router-dom";


import Nav from './components/Nav'

import FinderContainer from "./components/Finder/FinderContainer";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Profile from "./components/profile/Profile";



import s from './app.module.css';

import CatalogContainer from "./components/home/catalog/CatalogContainer";
import FavoritesContainer from "./components/favorites/FavoritesContainer";
import HomeContainer from "./components/home/HomeContainer";
import AuthorizationContainer from "./components/authorization/AuthorizationContainer";
import RegistrationContainer from "./components/registration/RegistrationContainer";


const App = () => {
    return (
            <div  className={s.container}>
                <Route path='/home' render={() => <HomeContainer />}/>
                <Route path='/favorites' render={() => <FavoritesContainer />}/>
                <Route path='/finder' render={() => <FinderContainer />}/>
                <Route path='/shopcart' render={() => <ShoppingCart />}/>
                <Route path='/profile' render={() => <Profile />}/>

                <Route path='/authorization' render={() => <AuthorizationContainer />} />
                <Route path='/registration' render={() => <RegistrationContainer />} />

                <Route path='/catalog' render={() => <CatalogContainer />} />

                <Nav />
            </div>
    )
};

export default App;
