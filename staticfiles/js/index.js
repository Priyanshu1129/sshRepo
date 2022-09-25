const navbar = document.getElementById("navbar");
const bar = document.getElementById("bar");
const cross = document.getElementById("cross");



bar.addEventListener('click',()=>{
    navbar.style.right = "0px";
    bar.style.display = "none";
    cross.style.display = "block";
}) 

cross.addEventListener('click',()=>{
    navbar.style.right = "-320px";
    bar.style.display = "block";
    cross.style.display = "none";
}) 


/* <i class="fa-sharp fa-solid fa-xmark-large"></i>  */