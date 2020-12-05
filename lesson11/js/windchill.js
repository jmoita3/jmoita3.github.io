const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6d1d830097a2c0bac1aba2337d0139e6";

fetch(apiURL2).then((response) => response.json())
.then((jsonObject) => {
    let divForecastData = document.querySelector('div.weather-forecast-wrapper');
    
    console.log(jsonObject);
    
    const list = jsonObject['list'];

    for ( let i = 0; i < 5; i++){
        const item = list[i];
        console.log(item);

        let temp1 = document.createElement("div");
        let tempday = document.createElement("p");
        let temperature = document.createElement("p");
        let icon = document.createElement("i");

        temperature.className = "temp";
        tempday.className = "weekday";

        if (i == 0){
            tempday.textContent = "Sat";
            var far = item.main.temp;
            var kel = far * (9/5) - 459.67;
            temperature.textContent = Math.round(kel) + "℉";
            if (item.weather[i].main === "Clear"){
                icon.className = "fas fa-sun"
                temp1.className = "day day1";
            } else if (item.weather[i].main === "Clouds"){
                icon.className = " fas fa-cloud-sun"
                temp1.className = "day day2";
            } else{
              icon.className = " fas fa-cloud-showers-heavy"
              temp1.className = "day day3";
            }
        } else if (i == 1){
            tempday.textContent = "Sun";
            var far = item.main.temp;
            var kel = far * (9/5) - 459.67;
            temperature.textContent = Math.round(kel) + "℉";
            if (item.weather[0].main === "Clear"){
                icon.className = "fas fa-sun"
                temp1.className = "day day1";
            } else if (item.weather[0].main === "Clouds"){
                icon.className = " fas fa-cloud-sun"
                temp1.className = "day day2";
            } else{
              icon.className = " fas fa-cloud-showers-heavy"
              temp1.className = "day day3";
            }
            
            
            
        } else if (i == 2){
            tempday.textContent = "Mon";
            var far = item.main.temp;
            var kel = far * (9/5) - 459.67;
            temperature.textContent = Math.round(kel) + "℉";
            if (item.weather.main === "Clear"){
                icon.className = "fas fa-sun"
                temp1.className = "day day1";
            } else if (item.weather.main === "Clouds"){
                icon.className = " fas fa-cloud-sun"
                temp1.className = "day day2";
            } else{
              icon.className = " fas fa-cloud-showers-heavy"
              temp1.className = "day day3";
            }
        } else if (i == 3){
            tempday.textContent = "Wed";
            var far = item.main.temp;
            var kel = far * (9/5) - 459.67;
            temperature.textContent = Math.round(kel) + "℉";
            if (item.weather.main === "Clear"){
                icon.className = "fas fa-sun"
                temp1.className = "day day1";
            } else if (item.weather.main === "Clouds"){
                icon.className = " fas fa-cloud-sun"
                temp1.className = "day day2";
            } else{
              icon.className = " fas fa-cloud-showers-heavy"
              temp1.className = "day day3";
            }
            
        } else{
            tempday.textContent = "Thu";
            var far = item.main.temp;
            var kel = far * (9/5) - 459.67;
            temperature.textContent = Math.round(kel) + "℉";
            if (item.weather.main === "Clear"){
                icon.className = "fas fa-sun"
                temp1.className = "day day1";
            } else if (item.weather.main === "Clouds"){
                icon.className = " fas fa-cloud-sun"
                temp1.className = "day day2";
            } else{
              icon.className = " fas fa-cloud-showers-heavy"
              temp1.className = "day day3";
            }
        }

        divForecastData.appendChild(temp1);
        temp1.appendChild(tempday);
        temp1.appendChild(icon);
        temp1.appendChild(temperature);
        

    }






  });




