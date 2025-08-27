

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB8Fedq7xVRW7Pl_H4hSfLTepnnQ1tQcug",
  authDomain: "e-commerce-bf1f5.firebaseapp.com",
  projectId: "e-commerce-bf1f5",
  storageBucket: "e-commerce-bf1f5.firebasestorage.app",
  messagingSenderId: "133378884813",
  appId: "1:133378884813:web:43f9f4af824f2622385584",
  measurementId: "G-C3VCMWGJ85"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig
