import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBJWEAPNEqlGPGagBYvPPidAbmojINiNzg",
    authDomain: "comments-devpleno.firebaseapp.com",
    databaseURL: "https://comments-devpleno.firebaseio.com",
    projectId: "comments-devpleno",
    storageBucket: "comments-devpleno.appspot.com",
    messagingSenderId: "467147856364"
  }
  firebase.initializeApp(config)


export const database = firebase.database()