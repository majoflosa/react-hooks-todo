import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Nav';
import routes from '../routes';

const App = () => {

    return (
        <Router>
            <div className="outer-wrap">
                <div className="content-wrap">

                    <Nav />

                    <main id="body">
                        {routes}
                    </main>
                    
                </div>
            </div>
        </Router>
    );

    // const [count, setCount] = useState(0);

    // return (
    //     <div>
    //         <p>You clicked {count} times</p>
    //         <button onClick={() => setCount(count + 1)}>
    //             Click Me
    //         </button>
    //     </div>
    // );

}

export default App;