// @ts-ignore
import * as functions from 'firebase-functions';
import { getAllEmployees, getEmployeeById } from './firebase-database';
import * as express from 'express'
// @ts-ignore
import firebase from 'firebase/app';
import * as admin from 'firebase-admin';

export * from './users';

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
        return getEmployeeById(req.params.userId)/* .then((resp) => {
            return renderApplication(req.url, res, resp);
        }); */
    } else {
        // index page. load data for all employees
        return getAllEmployees().then((resp) => {
            return res.send(JSON.stringify(resp));
        });
    }
});

export const api = functions.https.onRequest(app);