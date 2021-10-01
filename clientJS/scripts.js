function showSecretContent(){
    let li = document.querySelectorAll("li");
    for (let index = 0; index < li.length; index++) {
        let element = li[index];
        let text = Math.random().toString(36).substr(2, 5);
        element.innerHTML = text;
    }
    let div1 = document.getElementById("counter")
    div1.innerHTML = `There are ${li.length} 'li' items in this page.`
    div1.style.display = "block";
    div1.style.fontSize = "30"
    div1.style.color = "green"
}
function showExternalLinks(){
    let list = document.querySelectorAll("li a")
    for (let index = 0; index < list.length; index++) {
        let element = list[index];
        if (element.innerHTML.startsWith("http://")||element.innerHTML.startsWith("ftp://")){
            if(!element.innerHTML.startsWith("http://internal.com"))
            element.style.backgroundColor = "red";
        }
    }
}