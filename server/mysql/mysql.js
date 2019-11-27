/*
 * @Author: Lambda
 * @Begin: 2019-11-18 16:13:42
 * @Update: 2019-11-18 16:16:31
 * @Update log: 更新日志
 */
const mysql = require('mysql')

const {
  MYSQL_CONF
} = require('../config/db')


const con = mysql.createConnection(MYSQL_CONF)

con.connect()

const exec = (sql) => {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })

  return promise
}


module.exports = {
  exec,
  escape: mysql.escape
}