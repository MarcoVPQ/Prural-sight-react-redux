import { createStore, applyMiddleware, compose } from 'redux'
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './reducers/index';


const configureStore = initialState => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancers(applyMiddleware(reduxInmutableStateInvariant()))
        )
} 

export default configureStore
