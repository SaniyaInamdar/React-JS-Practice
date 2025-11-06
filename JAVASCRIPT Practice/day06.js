var imgages=["img1.jpg","img2.jpeg","img3.jpg","img4.jpg"]
count=0


function nextimg(){
 let img=document.getElementById("imagechange") 
count++
if(count>3){
  count=0
}
else{
  img.src=imgages[count]
}
}


function previousimg(){
 let img=document.getElementById("imagechange") 
count--
if(count<0){
  count=imgages.length-1
}
else{
  img.src=imgages[count]
}
}

// setInterval(nextimg, 2000)


