// import React, { useReducer } from 'react';

export const initialState = {
    tasks: [
        { 
            id: 1, 
            title: '15min workout', 
            status: 'unstarted', 
            description: 'Curabitur blandit lacus et egestas auctor. Integer eu erat suscipit, maximus nunc ut.' 
        },
        { 
            id: 2, 
            title: 'Check email', 
            status: 'ongoing', 
            description: 'Vivamus iaculis lobortis sodales. Etiam luctus libero nec sodales consectetur.' 
        },
        { 
            id: 3, 
            title: 'Make lunch', 
            status: 'done', 
            description: 'Etiam vulputate elementum efficitur. Nam pretium, metus vel pellentesque hendrerit.' 
        },
        { 
            id: 4, 
            title: 'Build website', 
            status: 'revising', 
            description: 'Phasellus metus tellus, venenatis mollis consequat sit amet, volutpat rhoncus nulla.' 
        },
    ],
    taskIndex: 5
}

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const newTask = {
                id: state.taskIndex + 1, 
                title: action.payload, 
                status: 'unstarted', 
                description: ''
            };
            return {
                tasks: [...state.tasks, newTask], 
                taskIndex: state.taskIndex + 1
            };
        default:
            return state;
    };
};