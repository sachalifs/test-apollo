import Hapi from 'hapi'
import vision from 'vision'
import inert from 'inert'
import handlebars from 'handlebars'
import path from 'path'

const join = path.join

const host = 'localhost'
const port = 8000


const server = new Hapi.server({
  host,
  port,
  routes: {
    files: {
      relativeTo: join(__dirname, '..', '..', 'public')
    }
  }
})

server.route({
  path: '/',
  method: 'GET',
  handler: (req, h) => h.view('index')
})

server.route({
  method: 'GET',
  path: '/public/{filename}',
  handler: function (req, h) {
      return h.file(req.params.filename)
  }
})

const start =  async function() {
  try {
    await server.register(vision)
    await server.register(inert)

    server.views({
      engines: {
          html: handlebars
      },
      relativeTo: join(__dirname, '..'),
      path: 'templates'
    })

    await server.start()
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', server.info.uri)
}

start()
