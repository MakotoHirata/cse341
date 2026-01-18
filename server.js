const app = require('./app');
const { initDb } = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 3000;

initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`MongoDB connected`);
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
