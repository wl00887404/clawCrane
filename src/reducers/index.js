import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import isFetching from "./isFetching"
import user from "./user"
import stores from "./stores"
const dateSelected = (state = new Date(), action) => {
    switch (action.type) {
        case "selectDate":
            return action.date
        default:
            return state
    }
}




// const auth = (state = "", action) => {
//     switch (action.type) {
//         case "receiveAuth":
//             return action.auth
//         default:
//             return state
//     }
// }


const error = (state = "", action) => {
    switch (action.type) {
        case "catchError":
            return action.error;
        case "cleanError":
            return ""
        default:
            return state;
    }
}


const reducers = combineReducers({
    dateSelected,
    // auth,
    user,
    stores,
    isFetching,
    error
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
)

export default store
