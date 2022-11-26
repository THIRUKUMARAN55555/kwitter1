const firebaseConfig = {
    apiKey: "AIzaSyCj-YB-FNtXrtfkeIPFhg6DVrlQCR4oxIQ",
    authDomain: "kwitter-f0300.firebaseapp.com",
    databaseURL: "https://kwitter-f0300-default-rtdb.firebaseio.com",
    projectId: "kwitter-f0300",
    storageBucket: "kwitter-f0300.appspot.com",
    messagingSenderId: "267060363962",
    appId: "1:267060363962:web:dd95a4078e0178b18a3883",
    measurementId: "G-4CGR9PTXP6"
  };
  
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



