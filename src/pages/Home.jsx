import { Container, List } from '@mui/material';
import React, { useState } from "react";
import TodoItem from '../components/TodoItem';
import Form from './../components/Form';


function Home() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        var filtred = todos.filter((todo) => todo.id !== id)
        setTodos(filtred)
    }

    return (
        <Container maxWidth='xs' style={{ marginTop: '2em' }}>
            <Form addTodo={addTodo} />
            <List sx={{ marginTop: '1em' }}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginTop: '1em' }}>
                        <TodoItem  todo={todo} deleteTodo={deleteTodo} />
                    </div>
                ))}
            </List>
        </Container>
    )
}

export default Home
