const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/db.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));

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