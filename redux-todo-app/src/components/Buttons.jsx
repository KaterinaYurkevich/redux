import React from 'react';
// import { useDispatch } from "react-redux";
// import { filterTodo } from '../redux/features/todoSlice';

export default function Buttons(props) {
    const { filterTodo } = props;
    // const dispatch = useDispatch();

    // const sortTodo = (status) => {
	// 	dispatch(filterTodo(status))
	// }

    return (
    <div className="flex justify-around text-center">
        <button onClick={() => filterTodo('all')}>Все</button>
        <button onClick={() => filterTodo(false)}>Невыполненные</button>
        <button onClick={() => filterTodo(true)}>Выполненные</button>
    </div>
    )
}