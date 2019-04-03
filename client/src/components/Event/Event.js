import React, {Component} from "react";
import { withRouter } from 'react-router';
import './Event.css';
import API from "../../utils/API";

var eventTypes = {
    1: "Court Date",
    2: "Reminders for Court Dates",
    3: "Case Manager Appointments",
    4: "Client data being updated"
};

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleStatusClick = event => {
        event.preventDefault();
        API.updateEvent(this.props.data.id, {status: parseInt(event.target.value)}).then(response => {
            //this.props.history.replace("/");
            window.location.reload();
        });
    };

    render() {
        return (
            <div id={this.props.data.id} className={`event`}>
                <div className={`event-buttons`}>
                    <button value={`2`} onClick={this.handleStatusClick}>✓</button>
                    <button value={`3`} onClick={this.handleStatusClick}>X</button>
                </div>
                <div className={`event-date`}>
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }).format(new Date(this.props.data.date * 1000))}
                </div>
                <div className={`event-icon event-type-${this.props.data.type} status-${this.props.data.status}`}/>

                <div className={`event-title`}>
                    {eventTypes[this.props.data.type]}: {this.props.data.title}
                </div>
                {this.props.data.body ? (
                    <div className={`event-text`}>
                        {this.props.data.body}
                    </div>
                ) : null}
            </div>
        )
    }
}

export default withRouter(Event);
