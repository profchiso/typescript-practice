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
    isSingle:true,
    details(){
       return `${this.name} is a ${this.gender} of age ${this.age} , ${this.isSingle? "maried":"not maried"}`
    }
}

const printPersonDetails=(person:Person):void=>{
    person.details()

}

printPersonDetails(person1)