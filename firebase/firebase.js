import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2Cqjxb3_mqxTnP890-xV6_dcUFh9qmXo",
    authDomain: "smart-attendance-system-96742.firebaseapp.com",
    databaseURL: "https://smart-attendance-system-96742-default-rtdb.firebaseio.com",
    projectId: "smart-attendance-system-96742",
    storageBucket: "smart-attendance-system-96742.appspot.com",
    messagingSenderId: "37815456625",
    appId: "1:37815456625:web:84aa0bedbbd5f3a4ce1cd0"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let auth  = getAuth(app)
const firebaseConf = {app,auth}

export default firebaseConf