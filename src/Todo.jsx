import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [todos, setTodos] = useState([{ task: "Sample", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addnewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo(""); // Clear input field after adding
    };

    let updateValue = (event) => {
        setNewTodo(event.target.value);
    };

    let Delete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let allDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        );
    };

    return (
        <div>
            <h4>To-Do List</h4>
            <input placeholder="Enter Task" value={newTodo} onChange={updateValue} />
            &nbsp;&nbsp;&nbsp;<button onClick={addnewTask}>Add Task</button>

            <br />
            <br />
            <br />
            <h3>Tasks</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>&nbsp;
                        <button onClick={() => Delete(todo.id)}>Delete</button>
                        &nbsp;<button onClick={() => markAsDone(todo.id)}>Task Done</button>
                    </li>
                ))}
            </ul>
            <button onClick={allDone}>Mark All as Done</button>
        </div>
    );
}
