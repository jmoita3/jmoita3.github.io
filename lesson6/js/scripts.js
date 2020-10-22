function responsive() {
    document.getElementsByClassName("main-navigation-elements")[0].classList.toggle("expand");
}

window.addEventListener("load", (event)=>{
    const lu = document.querySelector("#lastUpdated")
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyYear");
    cry.textContent = new Date().getFullYear();

    document.getElementsByClassName("topBanner").innerHTML = showday(); 
})


function showday(){
    var d = new Date();
    var days = d.getDay();
        if (days == 5) {
            document.getElementsByClassName("topBanner")[0].classList.toggle("show");
        }

    }     

    function initMap() {
        var location = {lat: 43.81873, lng: -111.79619};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 15, center: location});
        var marker = new google.maps.Marker({position: location, map: map});
      }