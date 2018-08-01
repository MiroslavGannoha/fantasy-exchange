"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const functions = require("firebase-functions");
const firebase_database_1 = require("./firebase-database");
const express = require("express");
const admin = require("firebase-admin");
__export(require("./users"));
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const app = express();
const db = admin.firestore();
app.get('/todos', (req, res) => {
    return db.collection('todos').get().then((snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
            todos.push({ data: childSnapshot.data() });
        });
        return res.status(200).json(todos);
    }).catch((error) => {
        console.log('Error getting messages', error.message);
        res.sendStatus(500);
    });
});
app.get('/users/:userId?', (req, res) => {
    res.set('Cache-Control', 'public, max-age=60, s-maxage=180');
    if (req.params.userId) {
        // client is requesting user-details page with userId
        // load the data for that employee and its direct reports
        return firebase_database_1.getEmployeeById(req.params.userId); /* .then((resp) => {
            return renderApplication(req.url, res, resp);
        }); */
    }
    else {
        // index page. load data for all employees
        return firebase_database_1.getAllEmployees().then((resp) => {
            return res.send(JSON.stringify(resp));
        });
    }
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map