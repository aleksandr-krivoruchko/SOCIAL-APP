import firebase from "firebase";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "DOMAIN",
//   databaseURL: "URL",
//   projectId: "PROJECT_ID",
//   storageBucket: "STORAGE",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

// import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMMGJpf0afthQXqjaGUyuHiGkxxKZChT0",
  authDomain: "rn-social-app-89315.firebaseapp.com",
  projectId: "rn-social-app-89315",
  storageBucket: "rn-social-app-89315.appspot.com",
  messagingSenderId: "464951712082",
  appId: "1:464951712082:web:eb58b488077db50f3a828b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
