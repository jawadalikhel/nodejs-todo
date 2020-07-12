import React, { Component } from 'react';
import Form from './form';
import Display from './display';

export default class Todo extends Component {
    state = {
        title: '',
        note: '',
        todosDB: []
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = async(e) =>{
        e.preventDefault();
        // console.log(this.state, '<---- state')

        const postRequest = await fetch('http://localhost:9000/api/v1/addTodo', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        postRequest.json()
    }

    getAllTodos = async() =>{
        const getRequest = await fetch('http://localhost:9000/api/v1/allTodos')
        const parsedResponse = await getRequest.json();

        return parsedResponse;
    }

    deleteTodo = async(id, e) =>{
        // e.preventDefault();

        console.log(id, '<--- id')
        const getRequest = await fetch('http://localhost:9000/api/v1/deleteTodo/' + id, {
            method: 'DELETE'
          })

        const parsedResponse = await getRequest.text();
        console.log(parsedResponse, ' this is the delete post JsonParsed')
    }

    componentDidMount(){
        this.getAllTodos()
        .then((result) =>{
            this.setState({
                todosDB: result.data
            })
        })
    }

    render() {
        this.getAllTodos()
        return (
            <div>
                Welcome to Todo

                <Form handleChange={this.handleChange} addTodo={this.addTodo}/><br/>

                <Display todosDB={this.state.todosDB} handleDelete={this.deleteTodo}/>
            </div>
        )
    }
}
