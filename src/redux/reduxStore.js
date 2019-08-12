import { createStore, combineReducers, applyMiddleware } from 'redux';
import ticketReducer from './ticketReducer'
import thunkMiddleware from 'redux-thunk'
import sortReducer from'./sortReducer'

let reducers  = combineReducers({ticketData: ticketReducer, sortData: sortReducer});

let store=createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;