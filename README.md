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

# TOOLS

- `GET /tools/uuid` 生成V4 UUID

    - 返回值

    `uuid`: V4版本UUID

    `uuid_without_dash`: UUID 过滤 “-“

    `uuid_base64`: uuid_without_dash 进行base64编码

    `uuid_62_system`: uuid_without_dash 转为 62 进制，转换工具 @kenticny/numconverter

- `GET /tools/network/ip` 获取客户端IP
