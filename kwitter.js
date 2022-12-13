var firebaseConfig = {
  apiKey: "AIzaSyDJhzwo_nAyUIdqxSDzGNyL4QeRy_GWk2Q",
  authDomain: "login-cb19c.firebaseapp.com",
  databaseURL: "https://login-cb19c-default-rtdb.firebaseio.com",
  projectId: "login-cb19c",
  storageBucket: "login-cb19c.appspot.com",
  messagingSenderId: "35014884101",
  appId: "1:35014884101:web:075f7824e9021984c7556c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }