const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyDvpnJDc1iUaFV1YTuT55G_og5fVzMCCqI",
    authDomain: "naji-74738.firebaseapp.com",
    projectId: "naji-74738",
    storageBucket: "naji-74738.appspot.com",
    messagingSenderId: "975537042133",
    appId: "1:975537042133:web:369e2540d303f1d5a4e85c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const firebase = initializeApp(firebaseConfig);
const mystorage = getStorage(app);

export default mystorage 