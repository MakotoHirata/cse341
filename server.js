
const express = require('express');
const app = express();
const lesson1contoroller = require('./controllers/lesson1')

const port = 3000

app.use('/', require('./routes'));
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});