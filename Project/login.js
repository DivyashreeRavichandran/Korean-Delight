var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( username === "Divya" && email === "divya@gmail.com" && password === "shree12"){
alert ("Login successfully");
window.location.href= "http://127.0.0.1:3000/pro2.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt === 0){
document.getElementById("username").disabled = true;
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}