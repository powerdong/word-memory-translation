/*
 * @Author: Lambda
 * @Begin: 2019-11-27 20:16:49
 * @Update: 2019-11-28 20:17:45
 * @Update log: 更新日志
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './components/header'
import index from './pages/index'
import write from './pages/write'
import recite from './pages/recite'
import myWords from './pages/myWords'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={index}></Route>
            <Route path="/write" exact component={write}></Route>
            <Route path="/recite" exact component={recite}></Route>
            <Route path="/my-words" exact component={myWords}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
