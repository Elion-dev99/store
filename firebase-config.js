<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD11KS2FcAeVF17n62FEJ0GVwiW-z9sf4A",
    authDomain: "store-eec2f.firebaseapp.com",
    projectId: "store-eec2f",
    storageBucket: "store-eec2f.firebasestorage.app",
    messagingSenderId: "571239549348",
    appId: "1:571239549348:web:c6c5c8c2f8661e02ef9931",
    measurementId: "G-7R4R6N4C3M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
