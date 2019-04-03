import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';

class Calendar extends Component {
    state = {
        value: new Date(),
    };

    onChange = value => {
        this.setState({value});
        this.props.onChange(this.props.id, value);
    };

    render() {
        const {value} = this.state;

        return (
            <div className="calendar">
                <div className="calendar-container">
                    <DateTimePicker
                        onChange={this.onChange}
                        value={value}
                    />
                </div>
            </div>
        );
    }
}

export default Calendar;