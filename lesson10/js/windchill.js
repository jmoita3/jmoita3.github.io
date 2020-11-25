const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6d1d830097a2c0bac1aba2337d0139e6";

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsonObject) => {
    const list = jsonObject['list'];
    console.log(jsonObject);
    for ( let i = 0; i < list.length; i++){
        if (list[i] == 0){
            
            let divForecastData = document.querySelector('div.weather-forecast-wrapper');
            let temp1 = document.createElement("p");
            temp1.textContent = "test text";
            divForecastData.appendChild(temp1);
        }
    }






  });




      /*
     <div class="weather-forecast-wrapper">
                <div class="day"><p class="weekday">Sat</p><i class="fas fa-cloud-sun-rain"></i><p class="temp">45&#8457;</p></div>
                <div class="day"><p class="weekday">Sun</p><i class="fas fa-cloud-showers-heavy"></i><p class="temp">42&#8457;</p></div>
                <div class="day"><p class="weekday">Mon</p><i class="fas fa-cloud-sun-rain"></i><p class="temp">44&#8457;</p></div>
                <div class="day"><p class="weekday">Tue</p><i class="fas fa-cloud-sun"></i><p class="temp">51&#8457;</p></div>
                <div class="day"><p class="weekday">Wed</p><i class="fas fa-sun"></i><p class="temp">58&#8457;</p></div>
            </div>
    */