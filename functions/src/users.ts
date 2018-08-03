import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';



export const getAllUsers = functions.https.onCall((data, context) => {
    return new Promise((resolve, reject) => {
        listAllUsers();

        const users = []
        function listAllUsers(nextPageToken?) {
            // List batch of users, 1000 at a time.
            return admin.auth().listUsers(1000, nextPageToken)
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

// On sign up.
export const processSignUp = functions.auth.user().onCreate((user) => {
    // const user = event.data; // The Firebase user.
    // Check if user meets role criteria.
    if (user.email/*  &&
        user.email.indexOf('@admin.example.com') !== -1 &&
        user.emailVerified */) {
        const customClaims = { accessLevel: 1 };
        // Set custom user claims on this newly created user.
        return admin.auth().setCustomUserClaims(user.uid, customClaims)
            .then(() => {
                // Update real-time database to notify client to force refresh.
                const metadataRef = admin.database().ref("metadata/" + user.uid);
                // Set the refresh time to the current UTC timestamp.
                // This will be captured on the client to force a token refresh.
                return metadataRef.set({ refreshTime: new Date().getTime() });
            })
            .catch(error => {
                console.log(error);
            });
    }

    return {status: 'error'};
});

export const setCustomClaims = functions.https.onCall((data, context) => {
    // Get the ID token passed.
    const {idToken, accessLevel, targetUserId} = data;
    // Verify the ID token and decode its payload.
    return admin.auth().verifyIdToken(idToken).then((claims) => {
        // Verify user is eligible for additional privileges.
        if (typeof claims.email !== 'undefined'/*  &&
            typeof claims.email_verified !== 'undefined' &&
            claims.email_verified &&
            claims.email.indexOf('@admin.example.com') !== -1 */) {
            // Add custom claims for additional privileges.
            return admin.auth().setCustomUserClaims(targetUserId, {accessLevel}).then(() => {
                // Tell client to refresh token on user.
                return { status: 'success' };
            });
        } else {
            // Return nothing.
            return { status: 'ineligible' };
        }
    });
});


// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
//     // ...
// });