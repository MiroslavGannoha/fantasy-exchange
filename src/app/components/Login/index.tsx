import * as React from 'react';
import EPanel from '../panel';
// @ts-ignore
import firebase from 'firebase/app';
import 'firebase/auth';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

// FirebaseUI config.
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            const user = authResult.user;
            console.log('user', user);
            // var credential = authResult.credential;
            // var isNewUser = authResult.additionalUserInfo.isNewUser;
            // var providerId = authResult.additionalUserInfo.providerId;
            // var operationType = authResult.operationType;
            // Do something with the returned AuthResult.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return false;
        },
    },
    signInSuccessUrl: '/overview',
    signInFlow: 'popup',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '/overview',
};

interface ILoginFormProps {
    className ?: string;
}

class LoginForm extends React.Component<ILoginFormProps, {}> {
    public render() {
        const Title = () => (
            <>
                <div className="h6 text-center w-100 mb-2">Sign In</div>
                <div className="h6 text-center w-100 mb-2">
                    {firebase.auth().currentUser && firebase.auth().currentUser.displayName}
                </div>
            </>
        );

        console.log(firebase.auth().currentUser);

        return (
            <EPanel titleNode={<Title />} className={this.props.className}>
                <form>
                    <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center">
                        <a href="" className="text-muted btn btn-link">
                            Need Help?
                        </a>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="form-group text-center m-0">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-fw fa-twitter" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-fw fa-facebook" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-fw fa-github" />
                            </button>
                        </div>
                    </div>
                </form>
            </EPanel>
        );
    }
}

export default LoginForm;
