/*
 * @Author: Lambda
 * @Begin: 2019-11-18 16:21:38
 * @Update: 2019-11-18 16:21:52
 * @Update log: 更新日志
 */
class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.code = 200
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.code = 301
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}