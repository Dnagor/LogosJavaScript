var menu = {
    width: 300,
    height : 150,
    title : 'custom menu'
}

for (var key in menu){
    console.log('Key :'+ key + ", Value :" + menu[key]);
}

var count = 0
for(var key in menu){
    count++
}
console.log('oject menu has '+ count+' properties')