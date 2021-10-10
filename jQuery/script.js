$(document).ready(function () {
    $("#register").bind("click", function () {
        let userData = {
            userSurname: $("#surname").val() + '.ValidatedByGET',
            userName: $("#name").val() + '.ValidatedByGET',
            userAge: $("#age").val() + '.ValidatedByGET',
            userCity: $("#city").val() + '.ValidatedByGET'
        }
        $.ajax({
            type: "GET",
            data: JSON.stringify(),
            contentType: "application/json",
            url: "http://localhost:3000/userRegisterGet?userName=" + userData.userName + "&userSurname=" + userData.userSurname + "&userAge=" + userData.userAge + "&userCity=" + userData.userCity,
            success: function (data) {
                console.log("Get method success!")
                console.log(JSON.stringify(data))
            }
        })
    })

    $("#register1").bind("click", function () {
        let userData = {
            userSurname: $("#surname").val() + '.ValidatedByPOST',
            userName: $("#name").val() + '.ValidatedByPOST',
            userAge: $("#age").val() + '.ValidatedByPOST',
            userCity: $("#city").val() + '.ValidatedByPOST'
        }
        $.ajax({
            type:"POST",
            data: JSON.stringify(userData),
            contentType: "application/json",
            url: "http://localhost:3000/userRegisterPost",
            success: function (data) {
                console.log("Post method success");
                console.log(JSON.stringify(data))
            }
        })
    })
})

age.onblur = function () {
    if (isNaN(this.value)) {
        age.focus();
        age.style.backgroundColor = "#e9a068"
    }
    if (this.value >= 100 || this.value <= 1) {
        alert("Введіть вік від 1 до 100.")
    }
}