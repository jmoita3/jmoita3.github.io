window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && width > 900) {
    document.getElementById("header").style.fontSize = "12px";
    document.getElementById("main-navigation").style.paddingTop = "8px"; 
    document.getElementById("main-navigation").style.paddingBottom = "8px"; 
    document.getElementById("logo").style.minWidth = "100px"
    document.getElementById("logo").style.marginTop = "-5px"

} else {
  document.getElementById("header").style.fontSize = "14px";
  document.getElementById("main-navigation").style.paddingTop = "15px"; 
  document.getElementById("main-navigation").style.paddingBottom = "15px"; 
  document.getElementById("logo").style.minWidth = "165px"
  document.getElementById("logo").style.marginTop = "0px"
  }

} 
