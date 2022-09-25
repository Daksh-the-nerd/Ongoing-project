
const firebaseConfig = {
    apiKey: "AIzaSyADo0JtJdJbyZdg0UiWBtbb0RbS00Ruji8",
    authDomain: "kwitter-project-208c8.firebaseapp.com",
    databaseURL: "https://kwitter-project-208c8-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-208c8",
    storageBucket: "kwitter-project-208c8.appspot.com",
    messagingSenderId: "24187170271",
    appId: "1:24187170271:web:5b7ee982f24822657ae86a"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    var names = document.getElementById("user1name").value
    localStorage.setItem("Username",names);
    var namelength = names.length;


    if(namelength == 0)
    {
        document.getElementById("login_button").style.display = "none";
    }
    else if(namelength >0)
    {
        var button = '<button id="login_button" onclick="addData()">Login</button>';
        document.getElementById("seconddiv3").innerHTML = button;
    }

    
}
var names = document.getElementById("user1name").value
function addData()
{
    var names = document.getElementById("user1name").value
    localStorage.setItem("Username",names);
    window.location = "Kwitter_room.html"
    var name_of_user = localStorage.getItem("Username")
}
    


function home()
{
    window.location = "index.html"
} 

function myFunction()
{
    var name_of_user = localStorage.getItem("Username")
    document.getElementById("welcome").innerHTML="Welcome to Kwitter " + name_of_user + "."
}





function addroom()
{
    var room_name = document.getElementById("input").value
    localStorage.setItem("input_value",room_name);
    console.log(room_name)

    firebase.database().ref("/").child(room_name).update({
        "The id of the user" : "daksh",
        "Surname of user"   : "Gupta"
    })
    localStorage.setItem("room_name",room_name);
}

function getData() 
{
    firebase.database().ref("/").on('value',
function(snapshot) 
{
    document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) 
    {
        childKey = childSnapshot.key;
        Room_names = childKey;
//Start code
    console.log("Room_name - " + Room_names)
    
//End code
    });});}
getData();



