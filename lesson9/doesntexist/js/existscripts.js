window.addEventListener("load", (event)=>{
    const requestURL = 'https://pipl.ir/v1/getPerson',
      divWeathertowns = document.querySelector('div.weathertowns');
let h = new Headers({
    "Acce"
})

  
    fetch(requestURL)
    .then(response=>response.json())
    .then(jsonObject=>{
      const towns = jsonObject['person'];
        let towns1 = [0, 1, 2];
      for ( let i of towns1 ){
        let towninfo = document.createElement('section');
        let townname = document.createElement('h2');
        townname.textContent = person[i].name;
        images.setAttribute('src', person[i].photo);
        towninfo.appendChild(townname);
        divWeathertowns.appendChild(towninfo);
        }
      });
    })