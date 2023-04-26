import React from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import InsertTodo from '../components/InsertTodo';
import TodoList from '../components/TodoList';
// import styled from "styled-components";
import "../styles/todoListBox.css";

const TodoPage = () => {

    const [todos, setTodos] = useState([]);

    const newId = useRef(1);

    const onInsert = useCallback((text) => {
        const newTodo = {
            id: newId.current,
            text,
            checked: false,
        };
        setTodos((todos) => [newTodo, ...todos]);
        newId.current += 1;
    }, [newId]);

    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) => (
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )));
    }, []);

    return (
        <div className='TodoListBox'>
            <Header />
            <InsertTodo onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
};

export default TodoPage;