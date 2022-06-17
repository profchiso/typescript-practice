var person1 = {
    name: "chinedu",
    age: 20,
    gender: "male",
    isSingle: true,
    details: function () {
        return "".concat(this.name, " is a ").concat(this.gender, " of age ").concat(this.age, " , ").concat(this.isSingle ? "maried" : "not maried");
    }
};
var printPersonDetails = function (person) {
    person.details();
};
printPersonDetails(person1);
