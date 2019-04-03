import React, {Component} from "react";
import Event from "../Event/Event";
import './EventList.css';

class EventList extends Component {
    render() {
        let date = Math.floor(Date.now() / 1000);
        let now  = false;
        return (
            <div className={`event-list`}>
                <a href={`/new`} className={`new-event-button`}>New Event</a>
                {this.props.list.length > 0 ? (
                    <div>
                        {this.props.list.map(event => {
                            if (date > event.date && !now) {
                                now = true;
                                return <div>
                                    <div className={`now-spacer`}>▶ NOW</div>
                                    <Event data={event}/>
                                </div>
                            }
                            return <Event data={event}/>
                        })}
                    </div>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </div>
        )
    }
}

export default EventList;
