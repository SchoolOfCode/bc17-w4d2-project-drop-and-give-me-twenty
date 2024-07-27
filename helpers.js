import crypto from 'crypto';

import { activities } from './activities.js';
import { error } from 'console';

// helper function to return all activities
export async function getAllActivites() {
    return activities;
}

// helper function to return activities by ID
export async function getActivitiesById(requestId) {
    const userActivities = activities.find(({ id }) => id === requestId);
    if (userActivities) {
        return userActivities;
    }
    else {
        throw new Error(`No activity with ${requestId} found.`);
    }

}

// add new activity to the activities array
export async function createNewActivity(newActivity) {
    if (!newActivity || newActivity.activity_duration === "" || newActivity.activity_type === "") {
        throw new Error("You have missed one of the input fields");
    }
    else {
        const activity = {
            id: crypto.randomUUID(),
            activity_submitted: JSON.stringify(Date.now()),
            ...newActivity

        }
        activities.push(activity);
        console.log(activities);
        return activity;
    }
};

//Helper function to updateActivity
// Assumption: all fields are submitted with an update
export async function updateActivity(requestId, updatedActivity) {
    // Match given id to an existing id
    const index = activities.findIndex(({ id }) => id === requestId);
    // if no match, throw error
    if (index === -1) {
        throw new Error(`There is no Id that matches ${requestId}`);
    }
    // if there is a match update activity with new fields
    activities[index] = {
        ...activities[index],
        activity_submitted: JSON.stringify(Date.now()),
        ...updatedActivity
    }
    // return updated activity
    return activities[index];
}

//Create helper function to delete activities
export async function deleteActivity(requestID) {
    //Match given id to an existing id
    const index = activities.findIndex(({ id }) => id === requestID);
    //if no match, throw error
    if (index === -1) {
        throw new Error(`There is no Id that matches ${requestId}`);
    }
    // if there is a match, store match in a variable
    const deletedActivity = activities[index];
    // remove the given activity
    activities.splice(index, 1);
    //return deleted element
    return deletedActivity;
}