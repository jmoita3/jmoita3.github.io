const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6d1d830097a2c0bac1aba2337d0139e6";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });