const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');


router.get('/testing', async(req, res) =>{
    try {
        res.json({
            status: 400,
            data: 'Testing GET response working'
          })
    } catch (err) {
      res.json({
        status: 400,
        data: err.message
      })
    }
  })

  router.post('/addTodo', (req, res) =>{
      try {
        let userEntry = {};

        userEntry.title = req.query.title;
        userEntry.note = req.query.note

        let createTodo = Todo.create(userEntry)

        res.json({
            status: 200,
            data: createTodo
        })
      } catch (error) {
          res.json({
              status: 401,
              data: error
          })
      }
  })

router.get('/allTodos', async(req, res) =>{
    try {
        const allTods = await Todo.find();

        res.json({
            status: 200,
            data: allTods
        })
    } catch (error) {
        res.json({
            status: 401,
            data: error
        })
    }
})



module.exports = router;