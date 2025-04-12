import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoa8hxEaLAi_4_Cjki7m1ALrrUQ4OjfRI",
  authDomain: "hack-sign-up.firebaseapp.com",
  projectId: "hack-sign-up",
  storageBucket: "hack-sign-up.appspot.com", 
  messagingSenderId: "169313754379",
  appId: "1:169313754379:web:be16873770831f7936d60e",
  measurementId: "G-SSSC0KHBG5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User registered successfully!");
      window.location.href = 'login.html'
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
});
