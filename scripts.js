var menu = document.getElementById("bars"); 
var home = document.getElementById("home");

home.style.right = '-300px';
menu.onclick = function () {

if (home.style.right == '-300px') {
    home.style.right = '0';
}
else{
    home.style.right = '-300px';
}
}