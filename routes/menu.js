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

module.exports = {
  menuList: async ctx => {
    ctx.body = {
      code: 0,
      data,
    }
  },

  getMenuByID: async ctx => {
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
  },

  createMenu: async ctx => {
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
  },

  updateMenu: async ctx => {
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
  },

  deleteMenu: async ctx => {
    const id = ctx.params.id
    let idx = -1
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        idx = i
        break
      }
    }
    if (idx < 0) {
      ctx.response.status = 404
      ctx.body = {
        code: -1,
        message: 'cannot find menu',
      }
      return
    }
    data.splice(idx, 1)
    ctx.body = {
      code: 0
    }
  },
}
