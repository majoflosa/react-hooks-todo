import React, { useState, useContext } from 'react';

import { MainContext } from './MainProvider';

const TaskCreator = props => {

    const [inputValue, setInputValue] = useState('');
    const { dispatch } = useContext( MainContext );

    const handleAddTask = () => {
        dispatch({type: 'ADD_TASK', payload: inputValue})
        setInputValue('');
    }

    return (
        <div id="task-creator">
            <input 
                type="text" 
                id="task-input" 
                placeholder="Enter task title..."
                value={inputValue}
                onChange={(event) => { setInputValue(event.target.value) }}
                onKeyPress={(event) => { 
                    event.which === 13 ? handleAddTask() : false 
                }}
            />
            <button 
                id="create-task" 
                className="btn"
                onClick={() => handleAddTask()} 
            >
                Add Task
            </button>
        </div>
    );

}

export default TaskCreator;
