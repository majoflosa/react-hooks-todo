import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Nav';
import routes from '../routes';

import '../style.css';

const App = () => {
    return (
        <Router>

            <div className="outer-wrap">
                <div className="content-wrap">

                    <Nav />
                    <main id="body">{routes}</main>

                </div>
            </div>
        </Router>
    );
}

export default App;
