import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCJgTV8KdSO6ney_Bb3b_HJu79lobkmScI",
    authDomain: "fir-auth-fa2b2.firebaseapp.com",
    projectId: "fir-auth-fa2b2",
    storageBucket: "fir-auth-fa2b2.appspot.com",
    messagingSenderId: "890069035682",
    appId: "1:890069035682:web:5df95a6e8e62be32e205fb"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()

  export { firebase ,app, auth}