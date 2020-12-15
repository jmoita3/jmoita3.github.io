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

      window.addEventListener("load", (event)=>{
        WebFont.load({
          google: {
            families: [
               'Merriweather Sans', 'Merriweather'
            ]
          }
        });
      }
      )
      function smoothScroll(target, duration){
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;
        function animation(currentTime){
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if(timeElapsed < duration) requestAnimationFrame(animation);
        }
    
        function ease(t, b, c, d){
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    
        requestAnimationFrame(animation);
    }
    
    var section1 = document.querySelector(".section1");
    
    section1.addEventListener("click", function(){
        smoothScroll(".section2", 1000);
    });