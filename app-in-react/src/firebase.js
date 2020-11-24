import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCuT6vS40GGS6ZG8DeFdMHFrBT2kjVYOY8",
    authDomain: "todo-app-2e702.firebaseapp.com",
    databaseURL: "https://todo-app-2e702.firebaseio.com",
    projectId: "todo-app-2e702",
    storageBucket: "todo-app-2e702.appspot.com",
    messagingSenderId: "151378358628",
    appId: "1:151378358628:web:1373ccf84ec0edce158a71",
    measurementId: "G-7ZSSWZNFE5"
});

const db = firebaseConfig.firestore();
// const auth = firebase.auth();

export default db;