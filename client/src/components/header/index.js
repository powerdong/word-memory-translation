/*
 * @Author: Lambda
 * @Begin: 2019-11-27 20:49:11
 * @Update: 2019-11-27 22:09:18
 * @Update log: 更新日志
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper } from './style'
import { actionCreators } from './store'

class Header extends Component {
  render() {
    const { num, handleAdd } = this.props
    return <HeaderWrapper onClick={() => handleAdd(5)}>{num}</HeaderWrapper>
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.getIn(['header', 'num'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd(num) {
      dispatch(actionCreators.add(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
