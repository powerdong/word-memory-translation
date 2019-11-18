/*
 * @Author: Lambda
 * @Begin: 2019-11-18 16:12:54
 * @Update: 2019-11-18 17:14:46
 * @Update log: 更新日志
 */
const {
  exec
} = require('../../mysql/mysql')

const xss = require('xss')


const getAllWords = async (key) => {
  let sql = `select * from words where 1=1 `
  // 根据创建时间进行倒序排列
  console.log(key)
  if (key) {
    sql += `and english like '%${key}%'`
  }
  sql += `order by createtime desc`
  return await exec(sql)
}

const writeWords = async (content) => {
  const english = xss(content.english)
  const chinese = xss(content.chinese)
  const author = content.author
  const createTime = +new Date()

  let sql = `
    insert into words (english, chinese, createTime, author)
    values ('${english}', '${chinese}', '${createTime}', '${author}')
  `

  const insertData = await exec(sql)

  return {
    id: insertData.insertId
  }
}

const updateWords = async (id, content = {}) => {
  const english = content.english
  const chinese = content.chinese

  const sql = `
    update words set english='${english}', chinese='${chinese}' where id='${id}'
  `
  const updateData = await exec(sql)

  if (updateData.affectedRows > 0) {
    return true
  }
  return false
}

const removeWord = async (id, author) => {
  const sql = `
    delete from words where id='${id}' and author='${author}'
  `

  const delData = await exec(sql)

  if (delData.affectedRows > 0) {
    return true
  }
  return false
}

module.exports = {
  getAllWords,
  writeWords,
  removeWord,
  updateWords
}