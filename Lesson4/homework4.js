let arr = [7, -78, -54, 57, -23, -76, 52, -93, 48, -30, -26, -6, 44, -94, -32, 84, 28, 75, 54, -1, 0]
function asc(a, b) {
    return a - b
}
function desc(a, b) {
    return -1 * (a - b)
}
function positive(i) {
    return i >= 0
}
function negative(i) {
    return i < 0
}
let arrSortedAsc = arr.sort(asc)
console.log(arrSortedAsc)
let arrSortedDesc = arrSortedAsc.reverse()
let arrSortedDesc1 = arr.sort(desc)
console.log(arrSortedDesc)
console.log(arrSortedDesc1)
let arrFilteredPositive = arr.filter(positive)
let arrFilteredNegative = arr.filter(negative)
console.log(arrFilteredPositive)
console.log(arrFilteredNegative)

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let students = []
for (let i = 1; i <= 10; i++) {
    let student = {
        yearOfStuding: getRandom(1995, 2021),
        facultyName: "Faculty name " + i
    }
    students.push(student)
}
console.log(students)

function sumYears(sum, student) {
    return sum + student.yearOfStuding
}

let sumOfYears = students.reduce(sumYears, 0)
console.log(sumOfYears)

function getFacultlyNames(array) {
    return array.facultyName
}

let facultyNames = students.map(getFacultlyNames)

console.log(facultyNames)