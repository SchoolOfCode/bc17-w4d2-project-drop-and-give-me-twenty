import express from 'express';
import helmet from 'helmet';
import { getActivitiesById, createNewActivity } from "./helpers.js";
const app = express();
const port = 3000

// Using the helmet middleware package
app.use(helmet());

// Root level get request handler
app.get('/', function (req, res) {
    try {
        res.status(200).send("Hello World");
        // log request to console
        console.log(req);
    } catch {
        res.status(400).json({
            "success": false,
            "payload": null
        });
    };
});

// GET request handler to return all activities
app.get('/activities', function (req, res) {
    const allActivities = activities;
    try {
        res.status(200).json({
            "success": true,
            "payload": allActivities
        });
    } catch {
        res.status(500).json({
            "success": false,
            "payload": null
        });
    };
});

//GEt request handler for User ID 

app.get('/activities/:id', async function (req, res) {
    const id = req.params.id
    const ActiveID = await getActivitiesById(id);
    try {
        res.status(200).json({
            "success": true,
            "payload": ActiveID
        });
    } catch {
        res.status(500).json({
            "success": false,
            "payload": null
        });
    };
});

app.post('/activities', async function (req, res) {
    const newActivity = await req.body;
    try {
        createNewActivity(newActivity);
    }
})

// open up listening on port 3000
app.listen(port, function () {
    console.log(`I am on Port ${port}`);
});