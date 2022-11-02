import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import '../global.css';

export default function Form({ addTodo }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0)


    const todoCreate = (text) => {
        const todoObj = { text: text, id: id }
        setId(id + 1)
        addTodo(todoObj)
        document.getElementById('outlined-basic').value=null

    }

    return (
        <div>
            <Paper style={{ padding: '1em' }}>
                <div style={{ display: "flex", justifyContent: 'Center' }}>
                    <TextField
                        id="outlined-basic"
                        label="Tarefa"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button variant="text" onClick={() => todoCreate(text)}>Add</Button>
                </div>
            </Paper>
        </div>

    )
}
