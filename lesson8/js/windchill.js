function windChill(){
    var t = document.querySelector("#text1").innerHTML;
    var s = document.querySelector("#text2").innerHTML;
    var f = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + 0.4275 * t * Math.pow(s,0.16));
    if ( t <= 50 && s > 3){
        document.getElementById("chills").innerHTML=f + "&#8457";
    }
    else{
        document.getElementById("chills").innerHTML="N/A";
    } 
            }
    window.onload=windChill ; 