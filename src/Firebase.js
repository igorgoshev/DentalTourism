// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeuV7P6HMdsoB1rc1Ri89jRRSaNVW7vR8",
    authDomain: "dentaltourism-c3482.firebaseapp.com",
    databaseURL: "https://dentaltourism-c3482-default-rtdb.firebaseio.com",
    projectId: "dentaltourism-c3482",
    storageBucket: "dentaltourism-c3482.appspot.com",
    messagingSenderId: "316853301523",
    appId: "1:316853301523:web:f979283dd03b0bc28c6ae6",
    measurementId: "G-23JF7Z2V2M"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);