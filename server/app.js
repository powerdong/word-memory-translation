/*
 * @Author: Lambda
 * @Begin: 2019-11-18 15:51:24
 * @Update: 2019-11-27 20:24:09
 * @Update log: 更新日志
 */
const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const session = require('koa-generic-session')
const json = require('koa-json')
const onerror = require('koa-onerror')
const redisStore = require('koa-redis')
const logger = require('koa-logger')
const path = require('path')
const fs = require('fs')
const morgan = require('koa-morgan')

const {
  REDIS_CONF
} = require('./config/db')

const index = require('./routes/index')
const user = require('./routes/user')
onerror(app)

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


const ENV = process.env.NODE_ENV
if (ENV !== 'production') {
  // 开发环境
  app.use(morgan('dev'));
} else {
  // 线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  // 将日志写入文件
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  // 第一个参数控制不同格式的输出
  app.use(morgan('combined', {
    stream: writeStream
  }));
}


// session 配置
app.keys = ['Lambda_906#']
app.use(session({
  // 配置 cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  // 配置 redis
  store: redisStore({
    // all: '127.0.0.1:6379' // 写死本地的 redis
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app