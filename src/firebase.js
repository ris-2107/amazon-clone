// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {

    apiKey: "AIzaSyAHjuLwLPl3tlk0grf23r9fZfAQD_UT_50",
    authDomain: "challenge-3744f.firebaseapp.com",
    projectId: "challenge-3744f",
    storageBucket: "challenge-3744f.appspot.com",
    messagingSenderId: "368786350566",
    appId: "1:368786350566:web:230cd8585fd8093ca6f627",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
