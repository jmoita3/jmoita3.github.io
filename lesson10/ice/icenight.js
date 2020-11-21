const apiURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83440,us&appid=c1820e7aeb32dab60966a969b49d248d&units=imperial";
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject)
    let container = document.querySelector('div.icenight');
    let current = document.createElement('section');
    let condition = document.createElement('p');
    let temp = document.createElement('p');
    
    condition.textContent = jsonObject.Object.list[0].temp;
    temp.textContent = Object.list.weather.main;

    current.appendChild(condition);
    container.appendChild(current);
    current.appendChild(temp);

    // document.getElementsByClassName('icenight').textContent = jsonObject.main.temp;
    
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png'; // note the concatenation
    // const desc = jsObject.weather[0].description; // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);

  });