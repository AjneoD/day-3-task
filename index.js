const fastify = require('fastify')({

    logger: true

  })

  fastify.get('/', function (req, reply){

    reply.send([
        
        { id: 1, name: 'Item 1', description: 'item 1 details' },
        { id: 2, name: 'Item 2', description: 'item 2 details' },
        { id: 3, name: 'Item 3', description: 'item 3 details' },

      ]);

  });

fastify.register(require('./routes/posts'))

fastify.listen({ port: 3000}, function(err, address) {
    if(err) {
        fastify.log.error(err)

        process.exit(1)
    }
  })