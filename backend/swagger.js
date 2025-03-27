const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Environmental Indicators via excel',
      version: '1.0.0',
      description:'API for uploading and reading Excel and calculating environmental indicators'
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ['./src/routes/*.js', "./index.js"],
};

module.exports = swaggerJsdoc(options);
