// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId:process.env.REACT_APP_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAcNsIbpnRyfp23hE1fYap0lXf63BJKwSY",
//   authDomain: "health-care-efbe3.firebaseapp.com",
//   projectId: "health-care-efbe3",
//   storageBucket: "health-care-efbe3.appspot.com",
//   messagingSenderId: "655417386042",
//   appId: "1:655417386042:web:ebd4d4398dda1c21f78103",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
