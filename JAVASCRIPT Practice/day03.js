const change = () =>{
  var h1= document.querySelector("#one")

   if(h1.innerHTML == "Hello JS Day 03"){
    h1.innerHTML = "JavaScript"
    h1.style.backgroundColor = "yellow"
   }
   else{
      h1.innerHTML = "Hello JS Day 03"
       h1.style.backgroundColor = "blue"
   }
}

var l=20;
let m=30
const s=50

function tp(){
  var l=10
  l=2
  var l=50
  console.log("in method"+l)
  let m=65
  m=5
  console.log("in method"+m)
  // s=30 error
  const s= 90
  console.log("in method"+s)
}
tp()


