const hamburger = document.querySelector(".hambur");
const toggle = document.querySelector(".togglebar");
const imgswitch = document.querySelector (".switch");

hamburger.addEventListener("click", function(e){
    toggle.classList.toggle("active");
    hamburger.classList.toggle("active")
    hamburger.classList.toggle("fix")
    const style = e.currentTarget.classList;
    if(style.contains("active")) {
        imgswitch.src = "images/icon-close.svg";  
        }

    else {
        imgswitch.src = "images/icon-hamburger.svg"
    }
});


