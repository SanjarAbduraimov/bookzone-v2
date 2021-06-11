const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test Express API with autogenerated swagger doc',
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./routes/admins.js'],
};

const specs = swaggerJsdoc(options);
