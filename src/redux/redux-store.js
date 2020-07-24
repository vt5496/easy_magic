import {combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import registrationReducer from "./registration-reducer";
import catalogReducer from "./catalog-reducer";
import authorizationReducer from "./authorization-reducer";
import usersReducer from "./users-reducer";
import finderReducer from "./finder-reducer"

let reducers = combineReducers({
    catalog: catalogReducer,
    user: userReducer,
    users: usersReducer,
    authorization: authorizationReducer,
    registration: registrationReducer,
    finder: finderReducer
})

let store = createStore(reducers);

window.state = store.getState();

export default store;