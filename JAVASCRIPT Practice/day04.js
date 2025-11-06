let sname='saniya'
let mark=[20,15,9]
course='science'

console.log("Student name is "+sname)

switch(course){
case 'science' : console.log("Course is Science"); break
case 'commerce' : console.log("Course is Commerce"); break
case 'arts' : console.log("Course is  Arts"); break
default: console.log("Invalid course")
}

for(i=0;i<mark.length;i++){
  console.log("Subject "+i+" Marks : "+ mark[i])
}

count=0
i=0
while(i<mark.length){
  if(mark[i]>=35){
    count++
  }
  i++
}
console.log("Total Subject you passed : "+count)

var avg=0;
for(i=0;i<mark.length;i++){
  avg=avg+mark[i]
}
console.log("Avg is :"+avg/3)
percentage=avg/300*100

console.log(percentage)

if(percentage>90) console.log("A+")
  else if(percentage>80) console.log("A")
   else  if(percentage>70) console.log("B+")
    else  if(percentage>60) console.log("B")
      else  if(percentage>50) console.log("C+")
        else  if(percentage>40) console.log("D")
          else console.log("Failed")