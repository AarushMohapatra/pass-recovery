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

function removeUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      //window.location = "kwitter_room.html";
  }


//document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addUser() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding a child"
  });

  localStorage.setItem("name", room_name);

  //window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
