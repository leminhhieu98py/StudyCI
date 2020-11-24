import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import firebase from 'firebase';
import TodoList from './todoList'
import db from '../firebase'

function CreateContainer() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                todo: doc.data().todo,
                id: doc.id
                })))
        })
    }, []);
    const addTodo = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setTodos([...todos, input]);
        setInput("");
    }
    return (
        <div>
            <form >
                <TextField
                    label="Enter Task here <3"
                    value={input}
                    onChange={event => setInput(event.target.value)} />
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={!input}
                    type="submit"
                    onClick={addTodo}>
                    Add a todo task</Button>
            </form>

            <ul>
                {todos.map(todo => {
                    return <TodoList task={todo} />
                })}
            </ul>
        </div>
    )
}

export default CreateContainer;
