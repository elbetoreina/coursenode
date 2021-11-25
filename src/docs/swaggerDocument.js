const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "0.1.2",
    title: "Explorax API Documentation",
    description:
      "Explorax is an edutainment platform developed by Universidad del Valle de Guatemala",
    contact: {
      name: "Administrator",
      email: "ajreina@uvg.edu.gt",
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Local server",
    },
    {
      url: "https://explorax-api.herokuapp.com",
      description: "DEV Env",
    },
  ],
};

module.exports = swaggerDocument;
