import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoSlice';
import './style.css';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div className="container">
            <form onSubmit={addTodoHandler} className="form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your todo"
                    className="input"
                />
                <button type="submit" className="button">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
