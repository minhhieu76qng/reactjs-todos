var firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDzdsOZSXW3Gn7KbJ6_UZ1UlV56pUcWLGg",
    authDomain: "note-react-1998.firebaseapp.com",
    databaseURL: "https://note-react-1998.firebaseio.com",
    projectId: "note-react-1998",
    storageBucket: "note-react-1998.appspot.com",
    messagingSenderId: "974356818032"
  };
  
  firebase.initializeApp(config);

  export const database = firebase.database();