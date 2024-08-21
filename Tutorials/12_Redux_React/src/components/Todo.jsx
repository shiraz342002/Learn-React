import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { removeTodo } from '../features/TodoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
   
    return (
        <div className="todo-list-container">
            <h2>Todo</h2>
            {todos.length === 0 ? (
                <p>No todos added yet.</p>
            ) : (
                todos.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <h3>{todo.text}</h3>
                        <button
                            className="delete-button"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Todo;
