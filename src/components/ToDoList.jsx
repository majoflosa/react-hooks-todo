import React, {useState} from 'react';

import ToDo from './ToDo';

const ToDoList = props => {
    return (
        <div className="task-list">
        
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />

        </div>
    );
}

export default ToDoList;