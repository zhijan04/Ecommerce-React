import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS7UvbsvdGag3MfvM__LCOZyI2uUJBjA4",
    authDomain: "ecommerce-c85db.firebaseapp.com",
    projectId: "ecommerce-c85db",
    storageBucket: "ecommerce-c85db.appspot.com",
    messagingSenderId: "505529521584",
    appId: "1:505529521584:web:cac4e720ef727cfcca3275"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);