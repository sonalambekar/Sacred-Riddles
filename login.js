import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPoRhpT1g8rjkk_QnOoFNZ2qTc39-ZT9g",
  authDomain: "register-law.firebaseapp.com",
  projectId: "register-law",
  storageBucket: "register-law.appspot.com",
  messagingSenderId: "492713927394",
  appId: "1:492713927394:web:cf63433c1097e89ce7b4bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login_submit = document.getElementById('login_submit');

login_submit.addEventListener('click', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('name').value

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update UI or perform actions after successful login
    const displayName = user.displayName;
    console.log(displayName);
    localStorage.setItem('user-name', JSON.stringify(username));

    // Redirect to homepage after successful login
    window.location.href = "homepage.html";
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
});

