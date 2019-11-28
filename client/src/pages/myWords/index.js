/*
 * @Author: Lambda
 * @Begin: 2019-11-28 20:12:50
 * @Update: 2019-11-28 20:14:54
 * @Update log: 更新日志
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class MyWords extends PureComponent {
  render() {
    return <div>我的单词</div>
  }
}

export default connect(null, null)(MyWords)
