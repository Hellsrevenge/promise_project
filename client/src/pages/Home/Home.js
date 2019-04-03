import React, {Component} from "react";
import API from "../../utils/API";
import EventList from "../../components/EventList/EventList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        API.getEvents().then(response => {
            this.setState({events: response.data.events})
        })
    }

    render() {
        return (
            <div className={`timeline`}>
                <h2>Timeline</h2>
                <EventList list={this.state.events}/>
            </div>
        );
    }
}

export default Home;