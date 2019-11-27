/*
 * @Author: Lambda
 * @Begin: 2019-11-27 21:39:54
 * @Update: 2019-11-27 22:11:46
 * @Update log: 更新日志
 */
import { fromJS } from 'immutable'
import * as constants from './constants'

const initialState = fromJS({
  num: 1
})

export default (state = initialState, { type, num }) => {
  switch (type) {
    case constants.ADD:
      return state.set('num', num)
    default:
      return state
  }
}
