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

        userEntry.title = req.body.title;
        userEntry.note = req.body.note

        let createTodo = Todo.create(userEntry)

        createTodo.then((result) =>{
            res.json({
                status: 200,
                data: result
            })
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

router.delete('/deleteTodo/:id', async(req, res) =>{
    try {
        const todoId = req.params.id

        const deltTodo = await Todo.findByIdAndDelete(todoId);

        console.log(deltTodo, '<--- deltTodo')
        deltTodo.then((result) =>{
            console.log(result, '<--- result')

            res.json({
                status: 200,
                data: 'todo is deleted'
            })
        })
        

    } catch (error) {
        res.json({
            status: 401,
            data: 'cant delete todo'
        })
    }
})



module.exports = router;