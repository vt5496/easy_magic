import {combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import registrationReducer from "./registration-reducer";
import catalogReducer from "./catalog-reducer";
import searchReducer from "./search-reducer";
import authorizationReducer from "./authorization-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    catalog: catalogReducer,
    user: userReducer,
    users: usersReducer,
    img: searchReducer,
    authorization: authorizationReducer,
    registration: registrationReducer,
})

let store = createStore(reducers);

export default store;