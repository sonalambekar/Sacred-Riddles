// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPoRhpT1g8rjkk_QnOoFNZ2qTc39-ZT9g",
  authDomain: "register-law.firebaseapp.com",
  projectId: "register-law",
  storageBucket: "register-law.appspot.com",
  messagingSenderId: "492713927394",
  appId: "1:492713927394:web:cf63433c1097e89ce7b4bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const submit = document.getElementById('signup');
const login_submit = document.getElementById('login_submit');



if(submit)
  {submit.addEventListener('click', async function(event) {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  
 
  

  if (password !== "" && email !== "" && password.length >= 6) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('user-name',JSON.stringify(name))
       window.location.href = "login.html"

      try {
        const docRef = await addDoc(collection(db, "users"), {
          password: password,
          email: email
        });
        console.log("Document written with ID: ", docRef.id);
        // Log users after adding a new document
        logUsers();
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error adding document");
      }
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      alert("Error: " + errorMessage);
    }
  } else {
    alert("Enter a valid email and password of at least 6 characters.");
  }
  
  
  
  
});
}



// Fetch and log users when the script runs

// Function to fetch and log users


else if(login_submit){
  login_submit.addEventListener('click', async function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
      
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Additional actions after successful login
      window.location.href = "Home.html"
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      alert("Error: " + errorMessage);
    }
   
  });
}



