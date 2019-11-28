/*
 * @Author: Lambda
 * @Begin: 2019-11-27 20:49:11
 * @Update: 2019-11-28 19:43:19
 * @Update log: 更新日志
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper } from './style'
import { actionCreators } from './store'

class Header extends Component {
  render() {
    const { title } = this.props
    return <HeaderWrapper> {title} </HeaderWrapper>
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['header', 'title'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle(title) {
      dispatch(actionCreators.setTitle(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
