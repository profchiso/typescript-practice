const date= new Date()
console.log(date.toDateString())
console.debug(date.toISOString())
let num:number
let firstName:string
let hobbies:string[]=[]
let person:{name:string;age:number,act:number[]}={
    name:"",
    age:0,
    act:[1,2,3,4]
}
let isVerified:boolean=true
let nothing:undefined=undefined
let nothing2:null=null
person.act.push(5)
console.log(person.act)

let newPerson={...person,name:"chinedu"}
console.log(newPerson)
const add=(a:number,b:number):void=>{
    console.log(a+b)
    //return a+b
}
add(3,3)





