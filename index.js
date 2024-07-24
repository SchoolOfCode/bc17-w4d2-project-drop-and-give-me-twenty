import express from 'express';
import helmet from 'helmet';
import activities from './activities.json' with{type: 'json'};
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

app.get('/activities/:id', function (req, res) {
    const id = req.params.id
    const ActiveID = getActivitiesById(id);
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

function getActivitiesById(requestId) {
    const userActivities = activities.find(({ id }) => id === requestId);   
      if (userActivities) {
        return userActivities;
      }
      throw new Error(`No activity with ${requestId} found.`);
    }






// open up listening on port 3000
app.listen(3000, function () {
    console.log("I am on Port 3000");
});
