const addN=(num1: number, num2: number):number=>{
    return num1 + num2;

}

const toUpperCase=(str:string):string=>{
return str.toUpperCase();

}
const pupualteArray=():number[]=>{
    let arr=[]
    for(let i=0; i<10; i++){
        arr.push(i)
    }
    return arr

}
let a = pupualteArray();
console.log(a)

export interface Address {
    state:string;
    lga:string;
    pmb:number;
    sex?:Gender

}

enum Gender{
    male="MALE",
    female="FEMALE"
}

const getAddress=(obj:Address):Address => {
    console.log(obj)
    return obj
}

getAddress({state:"Ebonyi",lga:"Ohaozara",pmb:111, sex:Gender.male}) 


const getData=async(url:string):Promise<any>=>{
    return await fetch(url)
}