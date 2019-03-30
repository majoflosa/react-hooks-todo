import React, {useState, Fragment} from 'react';

import TaskCreator from './TaskCreator';
import ToDoList from './ToDoList';

const Home = props => {
    return (
        <Fragment>

            <TaskCreator />

            <ToDoList />

        </Fragment>
    );
}

export default Home;
