import React, {useState, Fragment} from 'react';

import MainProvider from './MainProvider';
import TaskCreator from './TaskCreator';
import ToDoList from './ToDoList';

const Home = props => {
    return (
        <Fragment>
            <MainProvider>

                <TaskCreator />
                <ToDoList />

            </MainProvider>
        </Fragment>
    );
}

export default Home;
