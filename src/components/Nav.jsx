import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    return (
        <header id="header">
            <div id="logo">ToDos</div>

            <nav id="site-nav">
                <NavLink to="/" activeClassName="current">All</NavLink>
                <NavLink to="/active" activeClassName="current">Active</NavLink>
                <NavLink to="/unstarted" activeClassName="current">Unstarted</NavLink>
                <NavLink to="/ongoing" activeClassName="current">Ongoing</NavLink>
                <NavLink to="/revising" activeClassName="current">Revising</NavLink>
                <NavLink to="/done" activeClassName="current">Done</NavLink>
            </nav>
        </header>
    );
}

export default Nav;