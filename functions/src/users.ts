import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();
const auth = admin.auth();

export const registerNewUser = functions.https.onCall(({displayName, email, password}) => {
    if (!displayName || !email || !password) {
        throw new functions.https.HttpsError('invalid-argument', 'Data is missing');
    }

    auth.createUser({
        email,
        password,
    })
        .then(({ uid, metadata: {creationTime} }) => {
            auth.setCustomUserClaims(uid, {accessLevel: 1});
            db.collection('users').doc(uid).set({
                email,
                displayName,
                creationTime,
                accessLevel: 1,
                coins: 100,
                points: 0,
            });

        })
        .catch((error) => {
            throw new functions.https.HttpsError('internal', error);
        });
});

export const getAllUsers = functions.https.onCall((data, context) => {
    return new Promise((resolve, reject) => {
        listAllUsers();

        const users = []
        function listAllUsers(nextPageToken?) {
            // List batch of users, 1000 at a time.
            return auth.listUsers(1000, nextPageToken)
                .then((listUsersResult) => {
                    listUsersResult.users.forEach((userRecord) => users.push(userRecord));
        
                    if (listUsersResult.pageToken) {
                        // List next batch of users.
                        listAllUsers(listUsersResult.pageToken);
                    } else {
                        resolve(users);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        }
    });
});

export const deleteUser = functions.https.onCall(({targetId}, {auth: {token}}) => {
    if (token.accessLevel < 10) {
        throw new functions.https.HttpsError('permission-denied', 'You have no permission');
    }

    return auth.deleteUser(targetId)
        .catch((error) => {
            throw new functions.https.HttpsError('internal', error);
        });
});

export const setCustomClaims = functions.https.onCall((data, { instanceIdToken }) => {
    // Get the ID token passed.
    const {accessLevel, targetUserId} = data;
    // Verify the ID token and decode its payload.
    return auth.verifyIdToken(instanceIdToken).then((claims) => {
        // Verify user is eligible for additional privileges.
        if (typeof claims.email !== 'undefined'/*  &&
            typeof claims.email_verified !== 'undefined' &&
            claims.email_verified &&
            claims.email.indexOf('@admin.example.com') !== -1 */) {
            // Add custom claims for additional privileges.
            return auth.setCustomUserClaims(targetUserId, {accessLevel}).then(() => {
                // Tell client to refresh token on user.
                return { status: 'success' };
            });
        } else {
            // Return nothing.
            return { status: 'ineligible' };
        }
    });
});
