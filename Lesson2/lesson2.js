var person = {};
console.log(person);

person.name = "Jack";
person.age = 25;
console.log(person);

delete person.age;
console.log(person);

if ("name" in person){
    console.log('property name is in person');
}

console.log(person.text1 == undefined);
console.log(person.name === undefined);
console.log("text1" in person);
console.log("name" in person);
console.log(person.name);
console.log(person["name"]);
console.log(person["age"]);
person['test test'] = 'Custom';
console.log(person['test test']);

var key = 'test test'
console.log(person[key]);
console.log(person['test test'])