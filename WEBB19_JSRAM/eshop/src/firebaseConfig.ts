import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCbzT1X_l2JzwTwrAsYEgUe7z9DstSiWD4",
  authDomain: "nackademin-e2cb8.firebaseapp.com",
  databaseURL: "https://nackademin-e2cb8.firebaseio.com",
  projectId: "nackademin-e2cb8",
  storageBucket: "nackademin-e2cb8.appspot.com",
  messagingSenderId: "283853075773",
  appId: "1:283853075773:web:0af3f07036708559c1c154",
};

firebase.initializeApp(config);

export default firebase;
