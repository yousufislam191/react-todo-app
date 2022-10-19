import React, { useState } from 'react'
import style from './NewTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({
        title: "",
        description: ""
    });
    const { title, description } = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({
            title: "",
            description: ""
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.inputarea}>
                    <input
                        type="text"
                        value={title}
                        name="title"
                        required
                        id="title"
                        placeholder='Write the todo title...'
                        onChange={handleChange}
                    /><br />
                    <textarea
                        type="text"
                        value={description}
                        name="description"
                        required
                        id="description"
                        placeholder='Write the todo description..'
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo