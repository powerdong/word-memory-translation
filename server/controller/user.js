/*
 * @Author: Lambda
 * @Begin: 2019-11-26 21:27:22
 * @Update: 2019-12-02 17:19:09
 * @Update log: 更新日志
 */
const { exec, escape } = require('../mysql/mysql')

const { genPassword } = require('../config/cryp')
const SendCode = require('../config/sendCode')
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

// 这里使用邮箱发送验证码

const verify = async (username, mail) => {
  const sendCode = new SendCode(
    {
      from: '782999873@qq.com',
      subject: '注册',
      to: mail
    },
    username
  )
  const verifyCode = await sendCode.send()
  console.log('++++', verifyCode)
  return {
    verifyCode
  }
}

const registered = async (username, password, realname, mail) => {
  username = escape(username)
  realname = escape(realname)

  // 生成加密密码
  // password = genPassword(password)
  password = escape(password)
  mail = escape(mail)

  // 这里添加一些规则验证

  // const sql = `
  //   insert into users (username, password, realname, mail, code)
  //   values (${username}, ${password}, ${realname}, ${mail}, ${code})
  // `
  // const insertData = await exec(sql)

  return {
    id: 0
  }
}

module.exports = {
  login,
  registered,
  verify
}
