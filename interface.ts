interface Person{
    name:string;
    age:number;
    gender:string;
    isSingle:boolean;
    details():string;
}

const person1={
    name:"chinedu",
    age:20,
    gender:"male",
    isSingle:false,
    details(){
       return `${this.name} is a ${this.gender} of age ${this.age} , ${this.isSingle? "maried":"not maried"}`
    }
}

const printPersonDetails=(person:Person):string=>{
    console.log(person.details())
   return person.details()

}

printPersonDetails(person1)