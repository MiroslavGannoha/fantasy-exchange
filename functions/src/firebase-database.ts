// Client and Server Data Fetching Logic

// Import the Firebase base SDK.
import * as functions from 'firebase-functions';
// @ts-ignore
import firebase from 'firebase/app';
// Load the Firebase database module.
// Here you should load all modules of Firebase that you need.
import * as admin from 'firebase-admin';

// We initialize Firebase using a client-side config.
// const firebaseConfig = require('../../firebase.json').result;
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

// Get and return all employees
export const getAllEmployees = () => {
    return db.collection('todos').get().then(snap => {
        return { todos: snap.docs };
    });
};

// Get and return an employee by their id number
// also fetch all of the employee's direct reports (if any)
export const getEmployeeById = employeeId => {
    let employee;
    return firebase.database().ref(`todos/${employeeId}`).once('value').then(snap => {
        employee = snap.val();
        const reportIds = Object.keys(employee.reports || []);
        const getReports = reportIds.map(userId => firebase.database().ref(`/todos/${userId}`).once('value'));
        return Promise.all(getReports);
    }).then(reportSnapshots => {
        const reports = reportSnapshots.map(snap => snap.val());
        return { employee, reports };
    });
};