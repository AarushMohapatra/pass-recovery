var firebaseConfig = {
    apiKey: "AIzaSyCRn2__3N8UfB5bb0NDPhtk1EwfIh7Bx_g",
    authDomain: "pass-checkout.firebaseapp.com",
    databaseURL: "https://pass-checkout-default-rtdb.firebaseio.com/",
    projectId: "pass-checkout",
    storageBucket: "pass-checkout.appspot.com",
    messagingSenderId: "829994500654",
    appId: "1:829994500654:web:d1bd571ce02e9a285495bf"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }