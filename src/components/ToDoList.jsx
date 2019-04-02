import React, { useContext, useEffect } from 'react';

import { MainContext } from './MainProvider';
import ToDo from './ToDo';

const ToDoList = props => {
    const context = useContext( MainContext );
    
    useEffect(() => {
      fetch('http://remnanttribes.com/wp-json/wp/v2/posts?per_page=3')
            .then( data => data.json() )
            .then( data => {
                context.dispatch({
                    type: 'GET_STUFF',
                    payload: data
                });
            } );
    }, []);

    return (
        <div onClick={() => console.log( context.state )} className="task-list">
            {/* {context.state.stuff.length ? context.state.stuff.map( post => <p>{post.id}</p> ) : 'Loading...'} */}
            {context.state.tasks.map( task => <ToDo key={task.id} task={task} /> )}
        </div>
    );
}

export default ToDoList;
