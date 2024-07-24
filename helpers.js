import { activities } from './activities.js';

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
    const activity = {
        id : "1232324",
        activity_submitted : Date.now(),
        ...newActivity

    }
    activities.push(activity);
    console.log(activities);
    return activity;
};