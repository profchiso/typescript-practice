class Car {
    drive(): string {
        
        return `${this.name} is driving`;
    }
    name: string = "tesla";
}
const tesla = new Car();
console.log(tesla.drive());


class newCar extends Car {
    drive(): string {
        return `${this.name} is driving now`;
    }
    
   
}

const vBoot=new newCar();
console.log(vBoot.drive());