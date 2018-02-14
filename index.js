const log = require('util').log
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const morgan = require('koa-morgan')

const router = require('./router')

module.exports = async () => {
  const app = new koa()
  app.use(morgan('dev', {
    stream: {write: str => log(str)},
  }))
  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}