import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb5iXtftHHUiKQ0Vmzl6c3UaUbaYBEqX8",
  authDomain: "softuni-library-project.firebaseapp.com",
  projectId: "softuni-library-project",
  storageBucket: "softuni-library-project.appspot.com",
  messagingSenderId: "168426083665",
  appId: "1:168426083665:web:f8fbe6e66dc0d5d5876f70",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
export { projectFirestore, projectAuth };
