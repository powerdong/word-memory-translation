/*
 * @Author: Lambda
 * @Begin: 2019-11-26 21:25:48
 * @Update: 2019-11-26 22:22:44
 * @Update log: 更新日志
 */
const router = require('koa-router')()

router.prefix('/users')

const {
  login,
  registered
} = require('../controller/user')

const {
  SuccessModel,
  ErrorModel
} = require('../config/resModel')

router.post('/login', async function (ctx, next) {
  const {
    username,
    password
  } = ctx.request.body
  const result = await login(username, password)
  if (result.username) {
    // 服务端设置session
    ctx.body = new SuccessModel(result)
  } else {
    ctx.body = new ErrorModel('登陆失败')
  }
})


router.post('/registered', async function (ctx, next) {
  const {
    username,
    password,
    realname
  } = ctx.request.body
  const id = await registered(username, password, realname)
  ctx.body = new SuccessModel(id)
})

module.exports = router