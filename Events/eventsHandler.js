function showData(data) {
    alert(data);
}

function countBirds() {
    for (let index = 1; index < 5; index++) {
        showData('Bird number = ' + index + ' is in the sky')
    }
}

eventFromJS.onclick = function () {
    showData("eventFromJS is clicked by user")
}

area.onmousedown = function () {
    this.value = 'mouseDown'
}

area.onmouseup = function () {
    this.value = 'mouseUp'
}

area.onclick = function () {
    this.value = "mouseClick"
}

focusButton.onclick = function () {
    focusText.value = "one"
    setTimeout(() => {
        focusText.focus();
        focusText.value = "two"
    }, 1000);
}

formValidationAge.onblur = function () {
    if(isNaN(this.value)){
        this.classList.remove("accepted")
        this.classList.add("error");
        formValidationAge.focus();
    }else{
        this.classList.remove("error")
        this.classList.add("accepted")
        formValidationName.focus()
    }
}