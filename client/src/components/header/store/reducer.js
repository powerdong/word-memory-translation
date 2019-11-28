/*
 * @Author: Lambda
 * @Begin: 2019-11-27 21:39:54
 * @Update: 2019-11-27 22:11:46
 * @Update log: 更新日志
 */
import { fromJS } from 'immutable'
import * as constants from './constants'

const initialState = fromJS({
  title: '单词记译小册'
})

export default (state = initialState, { type, title }) => {
  switch (type) {
    case constants.TITLE:
      return state.set('title', title)
    default:
      return state
  }
}
