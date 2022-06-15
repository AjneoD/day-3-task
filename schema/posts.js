const typeString = { type: 'string' }; 

const post = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: typeString,
    description: typeString,
  },
};

const getPostsSchema = {
  response: {
    200: {
      type: 'array',
      items: post,
    },
  },
};

const getPostSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: post,
  },
};

const addPostSchema = {
  description: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      name: typeString,
      description: typeString,
    },
  },
  response: {
    200: typeString,
  },
};

const updatePostSchema = {
  description: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      name: typeString,
      description: typeString,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, 
  },
};

const deletePostSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

module.exports = {
  getPostsSchema,
  getPostSchema,
  addPostSchema,
  updatePostSchema,
  deletePostSchema,
};