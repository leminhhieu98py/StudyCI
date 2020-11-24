import React from 'react';
import { useState } from 'react';
import db from '../firebase';
import firebase from 'firebase';
import { ListItem, List, ListItemText, ListItemAvatar, Modal, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TodoList(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.task.todo);
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const updateTodo = () => {
        // set update
        db.collection('todos').doc(props.task.id).set({
            todo: input,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }, { merge: true })

        setOpen(false);
    }
    return (
        <div>
            <List>
                <Modal
                    open={open}
                    onClose={e => setOpen(false)}
                >
                    <div className={classes.paper}>
                        <h1>Enter your update task here</h1>
                        <input placeholder={props.task.todo} value={input} onChange={event => setInput(event.target.value)} />
                        <Button onClick={updateTodo}>Update</Button>
                    </div>
                </Modal>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.task.todo} secondary="Deadline is comming!!!" />
                    <EditIcon onClick={e => setOpen(true)}></EditIcon>
                    <DeleteSweepIcon onClick={event => db.collection('todos').doc(props.task.id).delete()}></DeleteSweepIcon>
                </ListItem>
            </List>
        </div>
    )
}

export default TodoList
