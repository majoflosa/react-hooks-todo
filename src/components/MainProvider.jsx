import React, { Component } from 'react';

export const MainContext = React.createContext();

class MainProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

        this.addTask = this.addTask.bind( this );
    }
    

    addTask( title ) {
        const newTask = {
            id: this.state.taskIndex,
            title: title,
            status: 'unstarted',
            description: ''
        };

        this.setState({ tasks: [...this.state.tasks, newTask], taskIndex: ++this.state.taskIndex });
    } 

    render() {
        return(
            <MainContext.Provider value={{
                tasks: this.state.tasks,
                addTask: this.addTask
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}

export default MainProvider;
