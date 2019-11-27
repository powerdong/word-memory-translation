/*
 * @Author: Lambda
 * @Begin: 2019-11-27 21:56:56
 * @Update: 2019-11-27 21:58:38
 * @Update log: 更新日志
 */
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
