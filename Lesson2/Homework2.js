let user = {};
console.log(user)
user.name = "Andriy";
user.surname = "Schevchenko";
user.name = "Serhiy";
console.log(user);
delete user.name;
console.log(user);


let employeeSalaries = {
    "Denys": 40,
    "Lida": 60,
    "Oleksiy": 50,
    "Max": 50,
    "Ira": 40
}

let salary = 0;
if (Object.keys(employeeSalaries).length === 0) {
    salary = 0;
    console.log("Object is empty");
} else {
    for (var key in employeeSalaries) {
        salary += employeeSalaries[key];
    }
}
console.log(salary)

function action(a, b, f) {
    try {
        return f(a, b);
    } catch (e) {
        console.log(e)
    }
}

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    if (b == 0) {
        throw new Error("Cannot divide by zero")
    } else {
        return a / b;
    }
}
function div1(a,b){
    if (isFinite(a/b)){
        return a/b;
    }
    return "Cannot divide by zero"
}
function mult(a, b) {
    return a * b;
}

console.log(action(1, 2, add))
console.log(action(1, 0, div))
console.log(action(1, 2, mult))
console.log(action(1, 2, sub))
console.log(action(1, 0, div1))