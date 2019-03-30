import React, {useState, Fragment} from 'react';

import ToDoList from './ToDoList';

const Home = props => {
    return (
        <Fragment>
            <div id="task-creator">
                <input type="text" id="task-input" placeholder="Enter task title..." />
                <button id="create-task" className="btn">Add Task</button>
            </div>

            <ToDoList />
        </Fragment>
    );
}

export default Home;