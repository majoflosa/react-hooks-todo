import React, { useContext } from 'react';

import { MainContext } from './MainProvider';
import ToDo from './ToDo';

const ToDoList = props => {

    const context = useContext( MainContext );

    return (
        <div className="task-list">
            {context.state.tasks.map( task => <ToDo key={task.id} task={task} /> )}
        </div>
    );
}

export default ToDoList;
