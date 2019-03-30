import React, {useState} from 'react';

const ToDo = props => {
    return (
        <div className="task-wrap">
            <div className="task-title-wrap">
                <span className="mark-done active"></span> 
                <span className="task-status ongoing">Ongoing</span>
                <span className="task-title">Task title here</span>
            </div>
            <div className="task-links">
                <a href="/details" className="btn task-details">Details</a>
                <span className="delete-task btn-border">x</span>
            </div>
        </div>
    );
}

export default ToDo;