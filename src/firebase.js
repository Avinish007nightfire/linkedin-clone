import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA_b-SO68gaWxCj8rI84wvQP-RJlN367Go",
    authDomain: "linkedin-clone-a6461.firebaseapp.com",
    projectId: "linkedin-clone-a6461",
    storageBucket: "linkedin-clone-a6461.appspot.com",
    messagingSenderId: "686305896752",
    appId: "1:686305896752:web:3437b579a537855a8640f5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebaseApp.auth()

  //explicit exports
  export {auth};
  export default db;
