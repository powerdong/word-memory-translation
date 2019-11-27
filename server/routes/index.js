/*
 * @Author: Lambda
 * @Begin: 2019-11-18 15:56:52
 * @Update: 2019-11-27 20:24:55
 * @Update log: 更新日志
 */
const router = require('koa-router')()

const {
  getAllWords,
  writeWords,
  updateWords,
  removeWord
} = require('../controller/index')

const {
  SuccessModel,
  ErrorModel
} = require('../config/resModel')

router.get('/get', async (ctx, next) => {
  const key = ctx.query.key || ''
  const listData = await getAllWords(key)
  ctx.body = new SuccessModel(listData)
})


router.post('/add', async (ctx, next) => {
  ctx.request.body.author = 'lambda'
  const data = await writeWords(ctx.request.body)
  ctx.body = new SuccessModel(data)
})

router.post('/update', async (ctx, next) => {
  ctx.request.body.author = 'lambda'
  const data = await updateWords(ctx.request.body.id, ctx.request.body)
  ctx.body = new SuccessModel(data)
})


router.post('/del', async (ctx, next) => {
  const author = 'lambda'
  ctx.body = ctx
  const val = await removeWord(ctx.request.body.id, author)
  if (val) {
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel('删除失败')
  }
})


module.exports = router