function responsive() {
    document.getElementsByClassName("main-navigation-elements")[0].classList.toggle("expand");
}

window.addEventListener("load", (event)=>{
    const lu = document.querySelector("#lastUpdated")
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyYear");
    cry.textContent = new Date().getFullYear();
})