import React from 'react';

import MainProvider from './MainProvider';
import TaskCreator from './TaskCreator';
import ToDoList from './ToDoList';

const Home = props => {
    return (
        <MainProvider>
            <TaskCreator />
            <ToDoList />
        </MainProvider>
    );
}

export default Home;
