import React from 'react';
import "../styles/todoList.css";
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle}) => {

    return (
        <div className='todoList'>
            {todos.map((todo) => (
                <TodoListItem key={todo.id} id={todo.id} text={todo.text} checked={todo.checked} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;