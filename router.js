const Router = require('koa-router')
const router = new Router()

const data = [{
  id: 1,
  name: 'GongBaoJiDing',
  price: 25,
}, {
  id: 2,
  name: 'YuXiangRouSi',
  price: 28,
}, {
  id: 3,
  name: 'LuShiHongShaoRou',
  price: 29,
}, {
  id: 4,
  name: 'CuLiuFeiChang',
  price: 35,
}]

router.get('/ping', async ctx => {
  ctx.body = {
    code: 0,
    data: 'ok',
  }
})

router.get('/menus', async ctx => {
  ctx.body = {
    code: 0,
    data,
  }
})

router.get('/menu/:id', async ctx => {
  const id = ctx.params.id
  const menu = data.find(item => item.id == id)
  if (!menu) {
    ctx.response.status = 404
    ctx.body = {
      code: -1,
      message: 'cannot find menu',
    }
    return
  }
  ctx.body = {
    code: 0,
    data: menu,
  }
})

router.put('/menu', async ctx => {
  const name = ctx.request.body.name
  const price = ctx.request.body.price
  if (!name || !price) {
    ctx.response.status = 500
    ctx.body = {
      code: -1,
      message: 'missing parameters'
    }
    return
  }
  const id = data.length + 1
  const record = {
    id,
    name,
    price,
  }
  data.push(record)
  ctx.body = {
    code: 0,
    data: record,
  }
})

router.post('/menu', async ctx => {
  const id = ctx.request.body.id
  const name = ctx.request.body.name
  const price = ctx.request.body.price

  if (!id) {
    ctx.response.status = 500
    ctx.body = {
      code: -1,
      message: 'missing parameter',
    }
    return
  }
  const record = data.find(item => item.id == id)
  if (!record) {
    ctx.response.status = 500
    ctx.body = {
      code: -1,
      message: 'cannot find menu',
    }
    return
  }
  if (name) record.name = name
  if (price) record.price = price
  ctx.body = {
    code: 0,
    data: record,
  }
})

module.exports = router