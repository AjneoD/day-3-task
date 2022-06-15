const fastify = require('fastify')({ logger: true });
fastify.register(require('./routes/posts'));

fastify.get('/', (req, reply) => {
    reply.send('Hello World!');
  });

  const startServer = async () => {
    try {
      await fastify.listen(PORT);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };