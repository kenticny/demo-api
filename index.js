const koa = require('koa')
const bodyParser = require('koa-bodyparser')

const router = require('./router')

module.exports = async () => {
  const app = new koa()
  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}