import swaggerAutogen from 'swagger-autogen';

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts routes documentation'
  },
  host:
    process.env.NODE_ENV === 'production'
      ? 'cse341-ft2m.onrender.com/'
      : 'localhost:3000',
  schemes:
    process.env.NODE_ENV === 'production'
      ? ['https']
      : ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

swagger(outputFile, endpointsFiles, doc);
