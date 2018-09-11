const Router = require('koa-router')
const uuid = require('uuid')
const Menu = require('./routes/menu')
const router = new Router()

router.get('/', async ctx => {
  router.stack.map(p => p.path)
  await ctx.render('index')
})

router.get('/ping', async ctx => {
  ctx.body = {
    code: 0,
    data: 'ok',
  }
})

router.get('/tools', async ctx => {
  ctx.body = {
    code: 0,
    data: [
      '/tools/uuid',
      '/tools/network/ip'
    ],
  }
})

router.get('/tools/uuid', async ctx => {
  const id = uuid.v4()
  ctx.body = {
    code: 0,
    data: id,
  }
})

router.get('/tools/network/ip', async ctx => {
  ctx.body = {
    ip: ctx.request.ip,
  }
})

// Menu API
router.get('/menus', Menu.menuList)
router.get('/menus/:id', Menu.getMenuByID)
router.put('/menus', Menu.createMenu)
router.post('/menus', Menu.updateMenu)
router.delete('/menus/:id', Menu.deleteMenu)

module.exports = router
