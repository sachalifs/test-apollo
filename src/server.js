import Hapi from 'hapi'

const host = 'localhost'
const port = 8000

const server = new Hapi.server({ host, port })

server.route({
  path: '/',
  method: 'GET',
  handler: (req, h) => 'Hola mundo'
})

const start =  async function() {
  try {
    await server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', server.info.uri)
}

start()
