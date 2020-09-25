import React from 'react';
import {Route, Switch} from "react-router-dom";


import Nav from './components/someWhereUsesComp/Nav/Nav'

import FinderContainer from "./components/mainPages/Finder/FinderContainer";
import ShoppingCart from "./components/mainPages/shoppingCart/ShoppingCart";
import Profile from "./components/mainPages/profile/Profile";

import CatalogContainer from "./components/mainPages/home/catalog/CatalogContainer";
import FavoritesContainer from "./components/mainPages/favorites/FavoritesContainer";
import HomeContainer from "./components/mainPages/home/HomeContainer";

import s from './app.module.css';
import Error404 from "./components/someWhereUsesComp/Error404/Erкor404";
import GetIdFromURL from "./components/dishes/dishCardOne/GetIdFromURL/GetIdFromURL";


const App = () =>
    <div className={s.container}>

        <div className={s.content}>
            <Switch>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/favorites' component={FavoritesContainer}/>
                <Route path='/finder' component={FinderContainer}/>
                <Route path='/shopcart' component={ShoppingCart}/>
                <Route path='/profile' component={Profile}/>
                <Route exact path='/catalog' component={CatalogContainer}/>

                <Route exact path='/catalog/:id' component={GetIdFromURL} />

                <Route component={Error404}/>
            </Switch>
        </div>

        <Nav/>

    </div>

export default App;
