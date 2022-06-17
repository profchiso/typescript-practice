class Car {
    drive(): string {
        
        return `${this.name} is driving`;
    }
    name: string = "tesla";
}
const tesla = new Car();
console.log(tesla.drive());