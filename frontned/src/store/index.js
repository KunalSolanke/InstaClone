import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/auth'
import thunk from 'redux-thunk'


const configureStore = () =>{
    const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const rootreducer = combineReducers({auth : authReducer})
    const store = createStore(rootreducer,composeEnhances(applyMiddleware(thunk)))
    return store
}

export default configureStore ;