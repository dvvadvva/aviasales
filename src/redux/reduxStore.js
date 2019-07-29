import { createStore, combineReducers, applyMiddleware } from 'redux';
import ticketReducer from './ticketReducer'
import thunkMiddleware from 'redux-thunk'

let reducers  = combineReducers({ticketData: ticketReducer});

let store=createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;