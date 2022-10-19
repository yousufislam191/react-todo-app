import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'

import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((previousTodos) => {
            return [...previousTodos, { id: uuidv4(), todo }]
        })
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
            return filteredTodos;
        });
    }

    return (
        <div className={style.container}>
            <div className={style.fixed}>
                <h1>Todo App</h1>
                <NewTodo onAddTodo={handleAddTodo} />
            </div>
            <div className={style.scrolling}>
                <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
            </div>
        </div>
    )
}

export default Home