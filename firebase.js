// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from 'firebase/auth';
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

//import 'firebase/auth';

// Check if default app is initialized
const firebaseConfig = {
      apiKey: "AIzaSyAwMwbqCzg-g26uDjXKyYkVxJ6gPspQFlk",
      authDomain: "starterapp-11b10.firebaseapp.com",
      projectId: "starterapp-11b10",
      storageBucket: "starterapp-11b10.appspot.com",
      messagingSenderId: "551173615859",
      appId: "1:551173615859:web:268b91cf72d81e495a4786",
}
let app;
if (!getApps().length) {
    console.log("Initializing Firebase...");
    app = initializeApp(firebaseConfig);
    console.log("Firebase Initialized!");
} else {
    app = getApps();
}

const authenticated = getAuth(app);
const db = getFirestore(app);

export { authenticated, db };
