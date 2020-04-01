const Router = require('koa-router')
const uuid = require('uuid')
const nconvertor = require('@kenticny/numconverter')
const Menu = require('./routes/menu')
const router = new Router()

router.get('/', async ctx => {
  const paths = router.stack.map(p => p.path)
  ctx.body = {
    code: 0,
    data: paths,
  }
})

router.get('/ping', async ctx => {
  ctx.body = {
    code: 0,
    data: 'ok',
  }
})

router.get('/tools/uuid', async ctx => {
  const id = uuid.v4()
  const nodashid = id.replace(/-/g, '')
  ctx.body = {
    code: 0,
    data: {
      uuid: id,
      uuid_without_dash: nodashid,
      uuid_base64: Buffer.from(nodashid).toString('base64'),
      uuid_62_system: nconvertor(nodashid, '16', '62'),
    }
  }
})

router.get('/tools/network/ip', async ctx => {
  ctx.body = {
    code: 0,
    data: ctx.request.header['x-real-ip'] || ctx.request.ip,
  }
})

// Menu API
router.get('/menus', Menu.menuList)
router.get('/menus/:id', Menu.getMenuByID)
router.put('/menus', Menu.createMenu)
router.post('/menus', Menu.updateMenu)
router.delete('/menus/:id', Menu.deleteMenu)

module.exports = router
