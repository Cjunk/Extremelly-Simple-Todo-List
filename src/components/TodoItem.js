import React from 'react';
import './todoItem.css'

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div className="todo-item-container">
            <li className="liclass">
                <div className="li-expander">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    <span className={`spantext${!todo.completed ? "" : "2"}`} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </li>
        </div>
    );
};

export default TodoItem;
