const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const event = require("./models/event");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.get('/api/events', (req, res) => {
    let events = event.getAllSortedBy("date", "desc");
    res.send({ events: events });
});

app.post('/api/events', (req, res) => {
    let status = event.insert(req.body);
    res.send(status);
});

app.post('/api/events/:id', (req, res) => {
    let status = event.update(req.params.id, req.body);
    res.send(status);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
