import firebase, {
  FirebaseApp,
  getApp,
  getApps,
  initializeApp,
} from "firebase/app";
import {
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  indexedDBLocalPersistence,
  initializeAuth,
} from "firebase/auth";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_DATABASE_URL,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  apiKey: "AIzaSyAKp9ZerIkS21afW_SIqRXg3W7f4m2m8pY",
  authDomain: "company-370208.firebaseapp.com",
  projectId: "company-370208",
  storageBucket: "company-370208.appspot.com",
  messagingSenderId: "658838976300",
  appId: "1:658838976300:web:3fa9303e5a8489df7f1e89",
  measurementId: "G-NQFMBDF4VQ",
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
const auth =
  getApps().length === 0
    ? initializeAuth(app, {
        persistence: [
          indexedDBLocalPersistence,
          browserLocalPersistence,
          browserSessionPersistence,
        ],
        popupRedirectResolver: browserPopupRedirectResolver,
      })
    : getAuth();

const provider = new GoogleAuthProvider();
export { auth, provider };
