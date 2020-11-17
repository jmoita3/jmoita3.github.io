window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && width > 900) {
    document.getElementById("header").style.fontSize = "12px";
    document.getElementById("main-navigation").style.paddingTop = "8px"; 
    document.getElementById("main-navigation").style.paddingBottom = "8px"; 
    document.getElementById("title").style.fontSize = "20px";
    document.getElementById("motto").style.fontSize = "12px";
    document.getElementById("logo").style.maxHeight = "40px"; 
    document.getElementById("title-wrapper").style.paddingTop = "0px"; 
    document.getElementById("title-wrapper").style.paddingBottom = "0px"; 
    document.getElementById("title-wrapper").style.marginTop = "-73px"; 
  document.getElementById("title-wrapper").style.marginBottom = "-15px"; 
} else {
  document.getElementById("header").style.fontSize = "14px";
  document.getElementById("main-navigation").style.paddingTop = "10px"; 
  document.getElementById("main-navigation").style.paddingBottom = "10px"; 
  document.getElementById("title").style.fontSize = "25px";
  document.getElementById("motto").style.fontSize = "15px";
  document.getElementById("logo").style.maxHeight = "60px"; 
  document.getElementById("title-wrapper").style.paddingTop = "10px"; 
  document.getElementById("title-wrapper").style.paddingBottom = "10px"; 
  document.getElementById("title-wrapper").style.marginTop = "-5px"; 
  document.getElementById("title-wrapper").style.marginBottom = "-5px"; 
  }





} 

