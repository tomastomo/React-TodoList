import React from 'react'
import { useState } from 'react';

export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo;
    const [isCompleted, setIsCompleted] = useState(false);

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    const markAsDone = () => {
        setIsCompleted(!isCompleted)
    };

    return (
        <>
            <li>
                {/*<input type="checkbox" checked={completed} onChange={handleTodoClick} />*/}
                <label style={{ color: isCompleted ? 'gray' : '', }} onClick={markAsDone}>
                    {task}
                </label>
            </li>
        </>
    )
}
