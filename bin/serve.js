const log = require('util').log
const app = require('../index')

async function main () {
  const server = await app()
  server.listen(9999)
  log('Demo api listening on port: 9999')
}

main()