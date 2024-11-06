// Import Firebase and FirebaseUI using ES module syntax
import firebase from 'firebase/app'; // Import only core Firebase features
import 'firebase/auth'; // Import Firebase authentication
import * as firebaseui from 'firebaseui'; // Import FirebaseUI

// Your Firebase configuration
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// Configuration for FirebaseUI
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            return true; // Redirect automatically
        },
        uiShown: function() {
            // Hide the loader
            document.getElementById('loader').style.display = 'none';
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

// Start the FirebaseUI authentication
ui.start('#firebaseui-auth-container', uiConfig);
