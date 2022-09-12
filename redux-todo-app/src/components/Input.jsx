import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todoSlice';

const Input = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
   
    function handleOnKeyDown(event) {
       if (event.keyCode === 13) {
        handleAddTodo(event)
       }
    };

    function handleAddTodo(event) {
        event.preventDefault();
        if (text.trim().length === 0) {
			alert("Вы не ввели задачу");
			setText('');
			return;
		}
        dispatch(
            addTodo ({ text })
        );
        setText('');
    };
    
    return (
        <div>
            <div className="flex justify-between">
                <input className="bg-white border-2 border-gray-300 rounded-sm pl-1.5 w-full h-12 box-border text-xl font-normal text-gray-400 hover:bg-indigo-100 hover:border-indigo-400 hover:outline-none hover:text-indigo-400"
                 type="text" placeholder="Добавить список" value={text}
                onChange={(e) => setText(e.target.value)} onKeyDown={handleOnKeyDown}/>
                <button onClick={handleAddTodo}>Добавить</button>
            </div>
        </div>
    )
}

export default Input;