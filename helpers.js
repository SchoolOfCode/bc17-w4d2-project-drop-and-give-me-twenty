import crypto from 'crypto';

import { activities } from './activities.js';
import { error } from 'console';

// helper function to return activities by ID
export async function getActivitiesById(requestId) {
    const userActivities = activities.find(({ id }) => id === requestId);
    if (userActivities) {
        return userActivities;
    }
    throw new Error(`No activity with ${requestId} found.`);
}

// add new activity to the activities array
export async function createNewActivity(newActivity) {
    if(!newActivity||newActivity.activity_duration === ""||newActivity.activity_type === "")
    {
        throw new Error("You have missed one of the input fields")
    }
    else{
    const activity = {
        id : crypto.randomUUID(),
        activity_submitted : Date.now(),
        ...newActivity

    }
    activities.push(activity);
    console.log(activities);
    return activity;}
};