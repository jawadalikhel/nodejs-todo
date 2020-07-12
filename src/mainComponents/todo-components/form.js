import React, { Component } from 'react'
import { render } from '@testing-library/react'

const form = (props) =>{
    return(
        <form onSubmit={props.addTodo}>
            <input type="text" onChange={props.handleChange} name="title" placeholder="title" /><br/>
            <input type="text" onChange={props.handleChange} name="note" placeholder="note" /><br/>
            <button>Add Todo</button>
        </form>
    )
}

export default form;
