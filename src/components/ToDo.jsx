import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

const ToDo = props => {
    const { id, title, status } = props.task;
    return (
        <div className="task-wrap">
            <div className={"task-title-wrap" + (status === 'done' ? ' done' : '')}>
                <span className={"mark-done" + (status !== 'done' ? ' active' : '')}></span> 
                <span className={"task-status " + status}>{status}</span>
                <span className="task-title">{title}</span>
            </div>
            <div className="task-links">
                <NavLink to={`/details/${id}`} className="btn task-details">Details</NavLink>
                <span className="delete-task btn-border">x</span>
            </div>
        </div>
    );
}

export default ToDo;