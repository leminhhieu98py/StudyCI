import React from 'react'
import { useState } from 'react'

function CreateContainer() {
    const [todos, setTodos] = useState(["di hoc", "di choi", "yeu em"]);
    const [input, setInput] = useState("");
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]);
    }

    console.log(input);
    return (
        <div>
            <form>
                <input value={input} onChange={event => setInput(event.target.value)} />
                <button type="submit" onClick={addTodo}>Add a todo task</button>
            </form>
            <ul>
                {todos.map(todo=>{
                    return <li>{todo}</li>
                })}

            </ul>
        </div>
    )
}

export default CreateContainer;
