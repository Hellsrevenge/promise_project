let dataSource = require("./data-source");
dataSource.init("events");

let event = {
    insert: function (event) {
        if (!event.date || !event.title || !event.type) {
            return false;
        }
        dataSource.insert("events", event);
    },
    update: function (id, data) {
        return dataSource.update("events", id, data);
    },
    findById: function (event_id) {
        dataSource.findById("events");
    },
    getAll: function () {
        return dataSource.getAll("events");
    },
    getAllSortedBy: function (column, sort) {
        return dataSource.getAllSortedBy("events", column, sort);
    }
};

module.exports = event;
