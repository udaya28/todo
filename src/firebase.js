import firebase from 'firebase';
// import 'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyCmqakoR7omcHqfdPgDYVMJzVTlMbE34vg",
    authDomain: "todo-udaya.firebaseapp.com",
    databaseURL: "https://todo-udaya.firebaseio.com",
    projectId: "todo-udaya",
    storageBucket: "todo-udaya.appspot.com",
    messagingSenderId: "91394222335",
    appId: "1:91394222335:web:0e92604669997c459104ca",
    measurementId: "G-NG7KKZRS2C"
  };
  // Initialize Firebase
 const App = firebase.initializeApp(firebaseConfig);
  const db = App.firestore();
   
export default db;