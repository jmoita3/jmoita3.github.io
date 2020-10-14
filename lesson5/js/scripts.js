function responsive() {
    document.getElementsByClassName("main-navigation-elements")[0].classList.toggle("expand");
}

window.addEventListener("load", (event)=>{
    const lu = document.querySelector("#lastUpdated")
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyYear");
    cry.textContent = new Date().getFullYear();
})



function showday(){
    var d = new Date();
    var days = d.getDay();
        if (days == 0) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("hide");
        }
        else if (days == 1) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("hide");
        }
        else if (days == 2) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("hide");
        }
        else if (days == 3) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("hide");
        }
        else if (days == 4) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("hide");
        }
        else if (days == 6) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("hide");
        }

    }     
    document.getElementsByClassName("topBanner").innerHTML = showday(); 