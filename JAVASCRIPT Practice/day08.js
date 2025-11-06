console.log("Hello from js")

function validfunction(){
 var email = document.querySelector("#email").value
 var password = document.querySelector("#password").value
 var number = document.querySelector("#number").value

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex = /^[A-Za-z0-9!@#$%^&*]{6,12}$/;
var numberRegex = /^\d{10}$/;

er=emailRegex.test(email);
pr=passwordRegex.test(password)
nr=numberRegex.test(number)

var result=document.querySelector("#result")
var why=document.querySelector("#why")

if(er && pr && nr){
  console.log("Login suceess")
  result.innerHTML="Login success"
  result.style.color="green"
}
else{
  console.log("Login failed")
  result.innerHTML="Login failed"
  result.style.color="red"
}

if(!er){
   why.innerHTML="Email is wrong"
  why.style.color="blue"
}
if(!pr){
   why.innerHTML="password is wrong"
  why.style.color="blue"
}
if(!nr){
   why.innerHTML="number is wrong"
  why.style.color="blue"
}
 console.log("eamil : "+ email)
 console.log("password : "+ password)
 console.log("number : "+ number)
}