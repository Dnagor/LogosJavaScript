function makeBuffer() {
    let string = ""
    function innerFunction() {
        return string;
    }
    innerFunction.add = function (value) {
        if (Number.isInteger(value)) {
            return string = string + value
        } else
            return string = string + " " + value;
    }
    innerFunction.clear = function () {
        return string = "";
    }
    innerFunction.print = function () {
        return string;
    }
    return innerFunction;
}

let buffer = makeBuffer();
console.log(buffer.print())
buffer.add("JavaScript")
buffer.add("Вчити")
buffer.add("потрібно")
console.log(buffer())

buffer.clear()
console.log(buffer())

buffer.add(0)
buffer.add(1)
buffer.add(0)
console.log(buffer())
