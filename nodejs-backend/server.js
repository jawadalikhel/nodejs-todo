const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

require('./db/db.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(session({
    secret: 'nugget007',
    resave: false,
    saveUninitialized: false,
}))

const todoController = require('./controllers/todo');
app.use('/api/v1/', todoController);




app.listen(process.env.PORT || 9000, () =>{
    console.log('listening on port 9000');
  })