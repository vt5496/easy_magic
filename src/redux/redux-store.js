import {combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import registrationReducer from "./registration-reducer";
import catalogReducer from "./catalog-reducer";
import authorizationReducer from "./authorization-reducer";
import usersReducer from "./users-reducer";
import finderReducer from "./finder-reducer"

const reducers = combineReducers({
    catalog: catalogReducer,
    user: userReducer,
    users: usersReducer,
    authorization: authorizationReducer,
    registration: registrationReducer,
    finder: finderReducer
})

// let localStorageCheck = localStorage['react-redux'] ?
//     JSON.parse(localStorage['react-redux']) :
//     {};

const store = createStore(reducers);

export default store;