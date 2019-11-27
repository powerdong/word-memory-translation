/*
 * @Author: Lambda
 * @Begin: 2019-11-26 21:27:22
 * @Update: 2019-11-27 20:24:41
 * @Update log: 更新日志
 */
const {
  exec,
  escape
} = require('../mysql/mysql')

const {
  genPassword
} = require('../config/cryp')


const login = async (username, password) => {
  username = escape(username)

  // 生成加密密码
  // password = genPassword(password)
  password = escape(password)

  const sql = `
    select username, realname from users where username=${username} and password=${password}
  `
  const rows = await exec(sql)

  return rows[0] || {}
}

const registered = async (username, password, realname) => {
  username = escape(username)
  realname = escape(realname)

  // 生成加密密码
  // password = genPassword(password)
  password = escape(password)


  // 这里添加一些规则验证

  const sql = `
    insert into users (username, password, realname) 
    values (${username}, ${password}, ${realname})
  `
  const insertData = await exec(sql)

  return {
    id: insertData.insertId
  }
}

module.exports = {
  login,
  registered
}