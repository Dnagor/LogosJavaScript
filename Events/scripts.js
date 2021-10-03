btn1.onclick = function(){
    elem = document.getElementById("text")
    if(elem.style.display ==="none"){
        elem.style.display = "block"
        this.value = "Hide element"
    }else{
        elem.style.display = "none"
        this.value = "Show hidden element"
    }
}
btn2.onclick = function(){
    this.classList.add("hide")
}
header.onclick = function(){
    elem = document.querySelectorAll("a")
    for (let index = 0; index < elem.length; index++) {
        if (elem[index].style.display === "none"){
            elem[index].style.display = "block"
        }else{
            elem[index].style.display = "none";
        }
       
    }
}