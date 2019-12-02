/*
 * @Author: Lambda
 * @Begin: 2019-12-01 21:39:18
 * @Update: 2019-12-02 17:32:58
 * @Update log: 更新日志
 */
const nodemailer = require('nodemailer')
const { exec, escape } = require('../mysql/mysql')

const config = {
  host: 'smtp.qq.com',
  port: 465,
  auth: {
    user: 'dd17393188614@foxmail.com', // user name
    pass: 'sdrkdzifhrjzbfah' // password
  }
}

const transporter = nodemailer.createTransport(config)

/**
 * 生成随机验证码
 */

class SendCode {
  constructor(mail, username) {
    ;(this.mail = mail), (this.username = username)
  }
  get code() {
    const key = Math.random()
      .toString(16)
      .slice(2, 6)
      .toUpperCase()
    return key
  }
  expire(time) {
    const timer = new Date().getTime() + 1000 * time
    return timer
  }

  async send() {
    const code = await this.code
    const mail = this.mail.to
    const sql = `
      insert into users (username, password, realname, mail, code)
      values ('${this.username}', '123', '48', '${mail}', '${code}')
    `
    // 存入数据库
    await exec(sql)

    this.mail.text = `您的账户 ${this.username} 您的验证码是 ${code}`
    transporter.sendMail(this.mail, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('mail sent:', info)
      console.log(this.mail.text)
    })
  }
}

module.exports = SendCode
