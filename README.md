# DEMO API

This this a demo api server in node.js for test.

# API

- `PUT /menu` 创建MENU

    - 参数body:

      `name` string 名称, 必填

      `price` number 价格, 必填


- `POST /menu` 修改MENU

    - 参数body:

      `id` number ID, 必填

      `name` string 名称, 选填

      `price` number 价格, 选填

- `GET /menus` 获取MENU列表

- `GET /menu/:id` 获取MENU

    - 参数Params:

      `id` number ID, 必填
      
- `DELETE /menu/:id` 删除MENU

    - 参数Params:
    
        `id` number ID, 必填
