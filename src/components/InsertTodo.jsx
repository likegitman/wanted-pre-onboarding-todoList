import React from 'react';
import { useState } from 'react';
import { MdAdd } from "react-icons/md";
import "../styles/insertTodo.css";

const InsertTodo = ({onInsert}) => {
    const [insertValue, setInsertValue]=useState("");

    const onSubmitTodo = (e) => {
        e.preventDefault();
        if(insertValue === "") {
            alert("할 일을 입력해주세요!");
        } else {
            onInsert(insertValue);
            setInsertValue("");
        }
    }

    return (
        <div>
            <form className='insertForm' onSubmit={onSubmitTodo}>
                <input type="text" value={insertValue} onChange={(e)=>setInsertValue(e.target.value)} placeholder="할 일을 입력해주세요!" maxLength="10" className="inputTodo" />
                <button type='submit'>
                    <MdAdd className='plusTodo' />
                </button>
            </form>
        </div>
    );
};

export default InsertTodo;