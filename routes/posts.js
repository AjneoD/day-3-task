const { getPostsSchema, getPostSchema, addPostSchema, updatePostSchema, deletePostSchema } = require( '../schema/posts.js');
  
const { getPostsHandler, getPostHandler, addPostHandler, updatePostHandler, deletePostHandler } = require( '../posthandlers/posts.js');
  
  const getPostsOpts = {
    schema: getPostsSchema,
    handler: getPostsHandler,
  };
  
  const getPostOpts = {
    schema: getPostSchema,
    handler: getPostHandler,
  };
  
  const addPostOpts = {
    schema: addPostSchema,
    handler: addPostHandler,
  };
  
  const updatePostOpts = {
    schema: updatePostSchema,
    handler: updatePostHandler,
  };
  
  const deletePostOpts = {
    schema: deletePostSchema,
    handler: deletePostHandler,
  };
  
  const postRoutes = (fastify, opts, done) => {
                    // get posts
    fastify.get('/api/posts', getPostsOpts);
  
                    // get 1 post
    fastify.get('/api/posts/:id', getPostOpts);
  
                    // create a new post
    fastify.post('/api/posts/new', addPostOpts);
  
                    // updating posts
    fastify.put('/api/posts/edit/:id', updatePostOpts);
  
                    // deleting a post
    fastify.delete('/api/posts/delete/:id', deletePostOpts);
  
    done();
  };
  
  module.exports = postRoutes;