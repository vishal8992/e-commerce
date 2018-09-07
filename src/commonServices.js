import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCYY0FUpbQztDoun-0G7OezDisGQlwy4hg",
    authDomain: "ecommerce-2d5d3.firebaseapp.com",
    databaseURL: "https://ecommerce-2d5d3.firebaseio.com",
    projectId: "ecommerce-2d5d3",
    storageBucket: "ecommerce-2d5d3.appspot.com",
    messagingSenderId: "273332995376"
};
firebase.initializeApp(config);
const dbRefObject = firebase.database().ref()
console.log('common service: '+dbRefObject)

export default dbRefObject;