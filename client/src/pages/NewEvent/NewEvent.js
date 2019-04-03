import React, {Component} from "react";
import Calendar from "../../components/Calendar/Calendar"
import './NewEvent.css';
import API from "../../utils/API";

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            title: "",
            date: Math.round(new Date() / 1000) + 60, //default is 1 minute ahead
            body: "",
            status: 1
        };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleOptionSelect = event => {
        this.setState({type: event.currentTarget.value});
    };

    calendarChange = (inputFieldId, inputFieldValue) => {
        this.setState({date: Math.round(new Date(inputFieldValue) / 1000)});
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.newEvent(this.state).then(response => {
            this.props.history.replace("/");
        });
    };

    render() {
        return (
            <div>
                <h2>NewEvent</h2>
                <form className={`new-event-form`}>
                    <dl className={`new-event-form-dl`}>
                        <dt>Title</dt>
                        <dd>
                            <input
                                className={`event-input`}
                                value={this.state.title}
                                name="title"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Event title"
                            />
                        </dd>
                        <dt>Type</dt>
                        <dd>
                            <select onChange={this.handleOptionSelect} className={`event-input`}>
                                <option>Select Type</option>
                                <option value={"1"}>Court Date</option>
                                <option value={"2"}>Reminders for Court Dates</option>
                                <option value={"3"}>Case Manager Appointments</option>
                                <option value={"4"}>Client data being updated</option>
                            </select>
                        </dd>
                        <dt>Date</dt>
                        <dd>
                            <Calendar onChange={this.calendarChange}/>
                        </dd>
                        <dt>Description</dt>
                        <dd>
                            <textarea name={"body"} className={`event-input`}
                                      onChange={this.handleInputChange}></textarea>
                        </dd>
                    </dl>
                    <button className="btn-submit" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewEvent;