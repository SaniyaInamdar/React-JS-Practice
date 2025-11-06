// console.log("Hello...")

// setTimeout( ()=>{
// console.log("Hello")
// },3000);


// setTimeout(()=>{
//   console.log("Loading...")
// },1000)
// setTimeout(()=>{
//   console.log("Please wait...")
// },2000)
// setTimeout(()=>{
//   console.log("Almost done...")
// },3000)
// setTimeout(()=>{
//   console.log("Ready!")
// },4000)

// count=0;
// let int= setInterval(()=>{
//   console.log("Interval - hello"+" "+count)
//     count++
//   if(count>5){
//   clearInterval(int)
//   }
// },3000)

// num=0
// let numbers=setInterval(()=>{
//     num++
//     console.log(num)
//     if(num>=5){
//       clearInterval(numbers)
//     }
// },5000)

// num=10;
// let stop=setInterval(()=>{
//   console.log(num)
//   num--
//   if(num<=0){
//     clearInterval(stop)
//     console.log("Time Up!")
//   }
// },1000)

// let msg=setInterval(()=>{
//   console.log("Running...")
// },1000)

// let time=setTimeout(()=>{
//   clearInterval(msg)
// },7000)

function showTime() {
 const now = new Date();
 innerText =
 now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
 console.log(innerText)
}
setInterval(showTime, 1000);