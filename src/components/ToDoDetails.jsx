import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

const ToDoDetails = props => {
    return (
        <div id="task-details-wrap">
        
            <div className="back-wrap">
                <NavLink to="/">« Back</NavLink>
            </div>
            <div className="task-details-title">
                <h4>Title:</h4>
                <div className="details-field-wrap">
                    <h2 className="edit-target">Task Title Here</h2>
                    <input type="text" id="edit-title" className="edit-field" />
                    <button className="confirm-edit btn">Save</button>
                </div>
            </div>
            <div className="task-details-description">
                <h4>Description:</h4>
                <div className="details-field-wrap">
                    <p className="edit-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit, ligula ut tincidunt eleifend, lacus nisi imperdiet nunc, efficitur viverra lectus metus vitae magna. Vestibulum augue ligula, mollis suscipit maximus quis, elementum ac turpis. Integer laoreet hendrerit suscipit. Nulla non felis id quam lacinia malesuada eget vel nulla. Sed non volutpat velit.</p>
                    <textarea name="" id="edit-description" cols="30" rows="5" className="edit-field"></textarea>
                    <button className="confirm-edit btn">Save</button>
                </div>
            </div>
            <div className="task-details-status-wrap">
                <h4>Status</h4>
                <div>
                    <span className="task-status selected-status">Unstarted</span>
                    <span className="task-status">Ongoing</span>
                    <span className="task-status">Revising</span>
                    <span className="task-status">Done</span>
                </div>
            </div>

            <div className="delete-section">
                <h4>Delete "Task title here"?</h4>
                <button className="btn">Delete</button>
            </div>

        </div>
    );
}

export default ToDoDetails;