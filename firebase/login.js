import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"; // ✅ This was missing
import {GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  

const firebaseConfig = {
    apiKey: "AIzaSyCoa8hxEaLAi_4_Cjki7m1ALrrUQ4OjfRI",
    authDomain: "hack-sign-up.firebaseapp.com",
    projectId: "hack-sign-up",
    storageBucket: "hack-sign-up.firebasestorage.app",
    messagingSenderId: "169313754379",
    appId: "1:169313754379:web:be16873770831f7936d60e",
    measurementId: "G-SSSC0KHBG5"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      alert('Logged In');
      window.location.href = 'http://127.0.0.1:5500/index.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});


// Google Login Function 

  
const googleButton = document.getElementById('google-btn');
const provider = new GoogleAuthProvider();

googleButton.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Logged in with Google!");
      window.location.href = "http://127.0.0.1:5500/index.html";
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
});


