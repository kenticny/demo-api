const log = require('util').log
const path = require('path')
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const morgan = require('koa-morgan')
const koaEjs = require('koa-ejs')

const router = require('./router')

module.exports = async () => {
  const app = new koa()
  app.use(morgan('dev', {
    stream: {
      write: args => log(args.trim())
    },
  }))
  koaEjs(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
  })
  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}