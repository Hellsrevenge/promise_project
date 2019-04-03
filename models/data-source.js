let DataSource = {
    metadata: {
        events: {
            auto_increment: 8,
            index: {},
        }
    },
    events: [
        {
            id: 1,
            type: 1,
            title: "Court date",
            date: 1554528831,
            body: "",
            status: 1
        },
        {
            id: 2,
            type: 2,
            title: "Reminder for court date",
            date: 1554442431,
            body: "Hello John, reminder that you have court tomorrow at 9:00 am at 101 Washington St. Oakland. If you need assistance with transportation, please contact your case manager at 555-666-7777.",
            status: 1
        },
        {
            id: 3,
            type: 3,
            title: "Case Manager Appointment",
            date: 1554096831,
            body: "",
            status: 3
        },
        {
            id: 4,
            type: 2,
            title: "Reminder for court date",
            date: 1554096831,
            body: "Hello John, reminder ",
            status: 1
        },
        {
            id: 5,
            type: 1,
            title: "Court Date",
            date: 1554082431,
            body: "",
            status: 2
        },
        {
            id: 6,
            type: 4,
            title: "Client Data Updated",
            date: 1554082431,
            body: "",
            status: 1
        },
        {
            id: 7,
            type: 3,
            title: "Case Manager Appointment",
            date: 1554082431,
            body: "",
            status: 2
        }
    ],
    init: function(table) {
        for (let i=0; i<this[table].length; i++) {
            this.metadata[table].index[this[table][i].id] = i;
        }
    },
    getAll: function (table) {
        return this[table];
    },
    getAllSortedBy: function (table, column, sort) {
        return this[table].sort(function (a, b) {
            if (sort === "desc") {
                return b[column] - a[column];
            } else {
                return a[column] - b[column];
            }
        });
    },
    findById: function (table, id) {
        return this[table][0];
    },
    insert: function (table, data) {
        data.id = this.metadata[table].auto_increment;
        this[table].push(data);
        this.metadata[table].auto_increment++;
        this.metadata[table].index[data.id] = this[table].length-1;
        console.log(this.metadata[table].index);
    },
    update: function (table, id, data) {
        console.log(id);
        let index = this.metadata[table].index[id];
        console.log(this.metadata[table].index);
        console.log(index);
        for (let key in data) {
            this[table][index][key] = data[key];
        }
        return this[table][index];
    }
};

module.exports = DataSource;
