import express from 'express';
import helmet from 'helmet';
import { getActivitiesById, createNewActivity, updateActivity, deleteActivity } from "./helpers.js";
const app = express();
const port = 3000

// Using the helmet middleware package
app.use(helmet());

// Using the express middleware package
app.use(express.json())

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
app.get('/activities', async function (req, res) {
    const allActivities = await activities;
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

//GEt request handler to get a specific activity

app.get('/activities/:id', async function (req, res) {
    const id = req.params.id
    const ActiveID = await getActivitiesById(id);
    try {
        res.status(200).json({
            "success": true,
            "payload": ActiveID
        });
    } catch (e) {
        res.status(300).json({
            "success": false,
            "payload": e
        });
    };
});

//Post request handler to add new activity
app.post('/activities', async function (req, res) {
    const newActivity = await req.body.addActivity;

    try {
        const activity = await createNewActivity(newActivity);
        res.status(201).json({
            "success": true,
            "payload": activity
        });
    }
    catch (e) {
        console.error(e)
        res.status(300).json({
            "success": false,
            "payload": e
        })
    }
})

// Put request handler to update an activity
app.put('/activities/:id', async function (req, res) {
    const id = req.params.id
    const activityUpdate = await req.body;
    try {
        const updatedActivity = await updateActivity(id, activityUpdate);
        res.status(200).json({
            "success": true,
            "payload": updatedActivity
        });
    } catch (e) {
        console.error(e)
        res.status(300).json({
            "success": false,
            "payload": e
        })
    }
})

//Delete handler function

app.delete('/activities/:id', async function(req,res){
    const id = req.params.id
    try{
        const deletedActivity = await deleteActivity(id);
        res.status(200).json({
            "sucess": true,
            "payload": deletedActivity
        });
    } catch (e){
        console.error(e)
        res.status(300).json({
            "success": false,
            "payload": e
        })
    }

})



// open up listening on port 3000
app.listen(port, function () {
    console.log(`I am on Port ${port}`);
});