const posts = require('../items/posts.js');

const getPostsHandler = (req, reply) => {
  reply.send(posts);
};

const getPostHandler = (req, reply) => {
  const { id } = req.params;

  const post = posts.filter((post) => {
    return post.id === id;
  })[0];

  if (!post) {
    return reply.status(404).send(new Error('Post not found'));
  }

  return reply.send(post);
};

const addPostHandler = (req, reply) => {
  const { name, description } = req.description; 

  const id = posts.length + 1;
  posts.push({ id, name, description });

  reply.send('Post added');
};

const updatePostHandler = (req, reply) => {
  const { name, description } = req.description;
  const { id } = req.params;

  const post = posts.filter((post) => {
    return post.id === id;
  })[0];

  if (!post) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  post.name = name;
  post.description = description;

  return reply.send('Post updated');
};

const deletePostHandler = (req, reply) => {
  const { id } = req.params;

  const postIndex = posts.findIndex((post) => {
    return post.id === id;
  });

  if (postIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  posts.splice(postIndex, 1);

  return reply.send('Post deleted');
};

module.exports = {
  getPostsHandler,
  getPostHandler,
  addPostHandler,
  updatePostHandler,
  deletePostHandler,
};