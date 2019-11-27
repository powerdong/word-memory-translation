/*
 * @Author: Lambda
 * @Begin: 2019-11-27 21:57:31
 * @Update: 2019-11-27 21:58:24
 * @Update log: 更新日志
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../components/header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer
