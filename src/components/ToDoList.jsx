import React, {useState} from 'react';

import ToDo from './ToDo';

const ToDoList = props => {
    const [tasks, setTasks] = useState([
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
    ])

    return (
        <div className="task-list">

            {tasks.map( task => {
                return <ToDo key={task.id} task={task} />;
                // return <ToDo key={id} id={id} title={title} status={status} description={description} />
            })}

        </div>
    );
}

export default ToDoList;