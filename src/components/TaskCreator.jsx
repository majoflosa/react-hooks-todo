import React, { useState, useEffect } from 'react';

import { MainContext } from './MainProvider';

const TaskCreator = props => {
    const [inputValue, setInputValue] = useState('');
    // const [creatingTask, setCreatingTask] = useState(false);

    // const handleAddTaskClick = () => {
    //     console.log( 'new task created: ', inputValue );
        
    //     // create new task, add to global state

    //     setCreatingTask(false);
    //     setInputValue( '' );
    // };
    
    // useEffect( () => {
    //     if ( creatingTask ) handleAddTaskClick();
    // } );

    return (
        <MainContext.Consumer>
            { context => {
                const handleAddTask = () => {
                    context.addTask( inputValue );
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
                            onKeyPress={(event) => { event.which === 13 ? handleAddTask() : false }}
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
            }}
        </MainContext.Consumer>
    );
}

export default TaskCreator;
