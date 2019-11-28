/*
 * @Author: Lambda
 * @Begin: 2019-11-28 19:35:28
 * @Update: 2019-11-28 20:09:49
 * @Update log: 更新日志
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button } from '../buttonStyle'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

class writeButton extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Link to={'/write'}>
          <Button>写单词</Button>
        </Link>
        <Link to={'/recite'}>
          <Button className="blue">背单词</Button>
        </Link>
        <Link to={'/my-words'}>
          <Button>我的单词</Button>
        </Link>
      </Wrapper>
    )
  }
}

export default connect(null, null)(writeButton)
