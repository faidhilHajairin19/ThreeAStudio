// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore'
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCID-2WqmfNpixVDTQlykFbi4lva6HCz8w",
  authDomain: "app-auth-bd37f.firebaseapp.com",
  projectId: "app-auth-bd37f",
  storageBucket: "app-auth-bd37f.appspot.com",
  messagingSenderId: "1065926301672",
  appId: "1:1065926301672:web:690f5d0802216e5163b65d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = app.firestore();

export { auth, db};