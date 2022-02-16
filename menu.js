const btnMenu = document.querySelector("#btnMenu");
const submenu = document.querySelector("#submenu");
btnMenu.addEventListener("click",function(){
    submenu.classList.toggle("mostrar");
});