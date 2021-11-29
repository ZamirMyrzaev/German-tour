import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVONA_TvQYmW2XPBXoMv2OXwVx4kUnNAQ",
  authDomain: "zamir-tour.firebaseapp.com",
  projectId: "zamir-tour",
  storageBucket: "zamir-tour.appspot.com",
  messagingSenderId: "306541894397",
  appId: "1:306541894397:web:f5c0821a5bab8770d33c94",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
