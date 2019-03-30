import React, { useState, useEffect } from 'react';

const TaskCreator = props => {
    const [inputValue, setInputValue] = useState('');
    const [creatingTask, setCreatingTask] = useState(false);

    const handleAddTaskClick = () => {
        console.log( 'new task created: ', inputValue );
        
        // create new task, add to global state

        setCreatingTask(false);
        setInputValue( '' );
    };
    
    useEffect( () => {
        if ( creatingTask ) handleAddTaskClick();
    } );

    return (
        <div id="task-creator">

            <input 
                type="text" 
                id="task-input" 
                placeholder="Enter task title..."
                value={inputValue}
                onChange={(event) => { setInputValue(event.target.value) }}
                onKeyPress={(event) => { event.which === 13 ? setCreatingTask(true) : false }}
            />

            <button 
                id="create-task" 
                className="btn"
                onClick={() => { setCreatingTask(true) }} 
            >
                    Add Task
            </button>

        </div>
    );
}

export default TaskCreator;
