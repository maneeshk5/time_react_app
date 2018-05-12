import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uuid from './../node_modules/uuid';
import helpers from './helpers';
import ServerCommunication from './serverCommunication';

const Client = new ServerCommunication();

class TimersDashboard extends React.Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now(),
            }, {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null,
            }, ],
    };

    handleCreateFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };
    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    };
    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId),
        });
    };
    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };
    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }), });
    };
    render() {
    return (
        <div className='ui three column centered grid'>
            <div className='column'>
                <EditableTimerList
                     timers={this.state.timers}
                     onFormSubmit={this.handleEditFormSubmit}
                     onTrashClick={this.handleTrashClick}
                     />
                <ToggleableTimerForm
                    onFormSubmit={this.handleCreateFormSubmit}
                />

                {/*<ToggleableTimerForm />*/}
                    {/*// isOpen={true}*/}
            </div>
        </div>
    );
    }
}

export default TimersDashboard;