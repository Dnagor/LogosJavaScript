'use strict'
let name1 = 'John'
let admin
admin = name1
console.log(admin)

console.log("-----------------")

let login = 'admin'
let password = 'TheMaster'
if (login == 'admin'){
    console.log('Password?')
    if(password == 'TheMaster'){
        console.log("Welcome!")
    }
    else {
        console.log("Wrong password")
    }
}
else{
    console.log("i don't know you")
}

console.log("-----------------")

switch (login){
    case 'admin':{
        console.log('Password?')
        switch(password){
            case 'TheMaster':{
                console.log("Welcome!")
                break
            }
            default:{
                console.log("Wrong password")
            }
        }
        break
    }
    default:{
        console.log("I don't know you")
    }
}