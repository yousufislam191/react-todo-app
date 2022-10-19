import React from 'react';
import style from './todo.module.css';

function Todo(props) {
    // console.log(props.todo)
    const { title, description } = props.todo;
    const { id } = props;

    const handleClick = (id) => {
        props.onRemoveTodo(id);
    }
    return (
        <article className={style.singleTodo}>
            <div className={style.text}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
            </div>
            <div>
                <button
                    className={style.btn}
                    onClick={() => {
                        handleClick(id)
                    }}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    );
}

export default Todo;