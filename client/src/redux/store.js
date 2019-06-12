import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {  } from './middlewares';

// create redux store
export default createStore(reducers, applyMiddleware());