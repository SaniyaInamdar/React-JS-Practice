let fruit1 = { namef1: "apple"}

let fruit2 = { namef2: "Mango" }

let fruit3 = { namef3: "Banana" }

let allfruits ={...fruit1, ...fruit2, ...fruit3
}

console.log(allfruits)

let fruit={...allfruits,namef3: "Orange"}

console.log(fruit)

let person1={ name : 'A',age: 20}
let emp={id : 1 ,comname: 'IBM'}
let info={...person1, ...emp}
console.log(info)

let update={...info,comname: 'Infosys',age:25}
console.log(update)

let addmail={...info,email:'a@gmail.com'}
console.log(addmail)
