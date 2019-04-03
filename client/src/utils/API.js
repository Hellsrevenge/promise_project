import axios from "axios";

export default {
    getEvents: function(){
        return axios.get("/api/events/");
    },
    newEvent: function(eventData) {
        return axios.post("/api/events/", eventData);
    },
    updateEvent: function(id, eventData) {
        return axios.post("/api/events/" + id, eventData);
    }
};
