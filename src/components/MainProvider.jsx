import React, { useReducer } from 'react';
import { taskReducer, initialState as initialTasks } from '../taskReducer';

export const MainContext = React.createContext();

const MainProvider = props => {
    const [state, dispatch] = useReducer(taskReducer, initialTasks)

    return(
        <MainContext.Provider value={{ state: state, dispatch: dispatch }}>
            {props.children}
        </MainContext.Provider>
    );

}

export default MainProvider;
