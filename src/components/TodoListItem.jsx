import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import "../styles/todoListItem.css";

const TodoListItem = ({ id, text, checked, onRemove, onToggle }) => {

    const [modify, setModify] = useState(false);
    const [modifyText, setModifyText] = useState(text);

    const modifyRef = useRef(null);

    const removeClick = () => {
        onRemove(id);
    };

    const toggleChecked = () => {
        onToggle(id);
    }

    const modifyClick = () => {
        setModify(true);
        if (modifyRef.current !== null) {
            modifyRef.current.focus();
        }
    };

    const updateText = () => {
        if (modifyText === "") {
            alert("바꿀 내용을 입력해주세요!");
        } else {
            setModify(false);
        }
    }

    return (
        <div className='todoListItem'>
            {modify ? null : <input type="checkbox" checked={checked} onChange={toggleChecked} />}
            {modify ?
                <input className='todoModifyInput' type="text" value={modifyText} onChange={(e) => setModifyText(e.target.value)} ref={modifyRef} />
                :
                <div className={checked === true ? "todoCheckedText" : 'todoListText'}>{modifyText}</div>
            }

            <div className='todoListBtnBox'>
                {modify ? <button onClick={updateText}>제출</button> : <button onClick={modifyClick}>수정</button>}
                <button onClick={removeClick}>삭제</button>
            </div>
        </div>
    );
};

export default TodoListItem;