import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsljUMoIansOJyyfcLiSULCRUoM0S-ftE",

  authDomain: "login-cd1d8.firebaseapp.com",

  projectId: "login-cd1d8",

  storageBucket: "login-cd1d8.appspot.com",

  messagingSenderId: "248276790906",

  appId: "1:248276790906:web:333c076d79810f7af2d5c3",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
