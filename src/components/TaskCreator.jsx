import React, { useState } from 'react';

const TaskCreator = props => {
    return (
        <div id="task-creator">
            <input type="text" id="task-input" placeholder="Enter task title..." />
            <button id="create-task" className="btn">Add Task</button>
        </div>
    );
}

export default TaskCreator;
