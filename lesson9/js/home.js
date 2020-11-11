window.addEventListener("load", (event)=>{
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json',
    divWeathertowns = document.querySelector('div.weathertowns');

  fetch(requestURL)
  .then(response=>response.json())
  .then(jsonObject=>{
    const towns = jsonObject['towns'];
      let towns1 = [1,4,5];
    for ( let i of towns1 ){

      let towninfo = document.createElement('section');
      let townname = document.createElement('h2');
      let towndesc = document.createElement('h3');
      let townyear = document.createElement('p');
      let townpop = document.createElement('p');
      let townrain = document.createElement('p');
      let images = document.createElement("img");
      townname.textContent = towns[i].name;
      towndesc.textContent = towns[i].motto;
      townyear.textContent = "Year founded: " + towns[i].yearFounded;
      townpop.textContent = "Population: " + towns[i].currentPopulation;
      townrain.textContent = "Average rainfall: " + towns[i].averageRainfall;
      images.setAttribute('src', towns[i].photo);
      towninfo.appendChild(townname);
      towninfo.appendChild(towndesc);
      towninfo.appendChild(townyear);
      towninfo.appendChild(townpop);
      towninfo.appendChild(images);
      divWeathertowns.appendChild(towninfo);
      }
    });
  })