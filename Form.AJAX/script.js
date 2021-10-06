age.onblur = function () {
    if (isNaN(this.value)) {
        age.focus();
        age.style.backgroundColor = "#e9a068"
    }
    if (this.value >= 100 || this.value <= 1) {
        alert("Введіть вік від 1 до 100.")
    }
}
function registerUserByGet() {
    let userData = {
        userSurname: document.getElementById("surname").value + '.ValidatedByGET',
        userName: document.getElementById("name").value + '.ValidatedByGET',
        userAge: document.getElementById("age").value + '.ValidatedByGET',
        userCity: document.getElementById("city").value + '.ValidatedByGET'
    }
    let request = new XMLHttpRequest();
    request.open("GET", "/userRegisterGet?userSurname=" + userData.userSurname + "&userName=" + userData.userName + "&userAge=" + userData.userAge + "&userCity=" + userData.userCity);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    let response = new Response();
    if(response.status == 200){
        reset();
    }
}
function registerUserByPost() {
    let userData = {
        userSurname: document.getElementById("surname").value + '.ValidatedByPOST',
        userName: document.getElementById("name").value + '.ValidatedByPOST',
        userAge: document.getElementById("age").value + '.ValidatedByPOST',
        userCity: document.getElementById("city").value + '.ValidatedByPOST'
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/userRegisterPost");
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(userData));
    let response = new Response();
    if(response.status == 200){
        reset();
    }
}

function reset(){
    document.getElementById("wrapper").reset();
}