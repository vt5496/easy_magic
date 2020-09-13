import React from 'react';
import {Route} from "react-router-dom";


import Nav from './components/Nav'

import FinderContainer from "./components/Finder/FinderContainer";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Profile from "./components/profile/Profile";

import CatalogContainer from "./components/home/catalog/CatalogContainer";
import FavoritesContainer from "./components/favorites/FavoritesContainer";
import HomeContainer from "./components/home/HomeContainer";
import AuthorizationContainer from "./components/authorization/AuthorizationContainer";
import RegistrationContainer from "./components/registration/RegistrationContainer";

import s from './app.module.css';
import OneDish from "./components/dishCard/bigDishCard/OneDish";


const App = () => {
    return (
            <div className={s.container}>
                <div className={s.main}>
                    <Route exact path='/' component={HomeContainer}/>
                    <Route path='/favorites' component={FavoritesContainer}/>
                    <Route path='/finder' component={FinderContainer}/>
                    <Route path='/shopcart' component={ShoppingCart}/>
                    <Route path='/profile' component={Profile}/>

                    <Route path='/profile/authorization' component={AuthorizationContainer}/>
                    <Route path='/profile/registration' component={RegistrationContainer}/>

                    <Route path='/catalog' component={CatalogContainer}/>

                    <Route path='/:idDish' component={OneDish} />
                </div>
                <Nav/>
            </div>
    )
};

export default App;
