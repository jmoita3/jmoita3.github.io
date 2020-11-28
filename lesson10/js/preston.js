
window.addEventListener("load", (event)=>{ 


  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6d1d830097a2c0bac1aba2337d0139e6";
   divWeatherdata = document.querySelector('div.weather-summary-paragraph');
   
   fetch(apiURL)
     .then((response) => response.json())
     .then((jsonObject) => {
      const weather = jsonObject['weather'];
      const weatherTemp = jsonObject['main'];
      const wind = jsonObject['wind'];

      function windChills(){
    
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



       console.table(jsonObject);
       let mainList = document.createElement("ul");
       mainList.className = "list2";
       let mainWeather = document.createElement("p");
       mainWeather.textContent = weather[0].main;
       let TempSpan = document.createElement("span");
       let currentTemp = document.createElement("p");
       currentTemp.setAttribute("id", "text1");
       var far = weatherTemp.temp;
       var kel = far * (9/5) - 459.67;
       currentTemp.textContent = Math.round(kel) + "℉";
       let windChill = document.createElement("p");
       windChill.textContent = "chill";
       windChill.setAttribute("id", "chills");
       let humidity = document.createElement("p");
       humidity.textContent = weatherTemp.humidity;
       let windSpeedWrapper = document.createElement("span");
       let windSpeed = document.createElement("p");
       windSpeed.textContent = wind.speed + " mph";
       windSpeed.setAttribute("id", "text2");
       mainList.appendChild(mainWeather);
       TempSpan.appendChild(currentTemp);
       mainList.appendChild(TempSpan);
       mainList.appendChild(windChill);
       mainList.appendChild(humidity);
       mainList.appendChild(windSpeedWrapper);
       windSpeedWrapper.appendChild(windSpeed);
       divWeatherdata.appendChild(mainList);
       windChills();
       
     }
     
     );
    
     
 
 })
 