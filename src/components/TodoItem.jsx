import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({todo, deleteTodo}) {

    return (
        <>        
        <EditTodoDialog/>
        <Paper style={{padding: '0.5em 0em'}}>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" onClick={() => deleteTodo(todo.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon >
                        <Checkbox edge="start" tabIndex={-1} disableRipple />
                    </ListItemIcon>
                    <ListItemText primary={todo.text} />
                </ListItemButton>
            </ListItem>
        </Paper>
        </>
    );
}
