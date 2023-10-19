const firebaseConfig = {
      apiKey: "AIzaSyBeVQscXCrgsL2yIda37ZCQ6N-kID8a62o",
      authDomain: "kwitter-620fc.firebaseapp.com",
      databaseURL: "https://kwitter-620fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-620fc",
      storageBucket: "kwitter-620fc.appspot.com",
      messagingSenderId: "786850181284",
      appId: "1:786850181284:web:9a1b2a8db49ab3100bb631"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function getData() {firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
      "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
      //End code
});});}
getData();
logout()
user_name
room_name
send()
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})

