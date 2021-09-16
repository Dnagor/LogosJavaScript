function getLast(products) {
    return products[products.length - 1];
}

let arr = ["Jazz", "Blues", "Electro"]
arr.push("Rock")

arr.splice(-2, 1, "Classic")

let deleted = arr.shift()
console.log(deleted)

arr.unshift("Rep", "Reggae")

function find(array, value) {
    return array.indexOf(value);
}

function filterRange(array, a, b) {
    return array.splice(a, b)
}

function camelize(str) {
    a = str.split("-")
    for (let i = 1; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1)
    }
    return a.join("")
}



