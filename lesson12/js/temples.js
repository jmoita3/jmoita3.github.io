window.addEventListener("load", (event)=>{
    const requestURL = '../js/test.JSON',
      divWeathertowns = document.querySelector('div.weathertowns');
  
    fetch(requestURL)
    .then(response=>response.json())
    .then(jsonObject=>{
      const temples = jsonObject['temples'];
        let temples1 = [0,1,2,3];
      for ( let i of temples1 ){
  
        let towninfo = document.createElement('section');
        let front = document.createElement('div');
        front.className = "front card";
        let back = document.createElement('div');
        back.className = "back card";
        let townname = document.createElement('h2');
        let towndesc = document.createElement('h3');
        let townyear = document.createElement('p');
        let townpop = document.createElement('p');
        let townrain = document.createElement('p');
        let images = document.createElement("img");
        let link = document.createElement("a");
        let linktext = document.createTextNode("Visit town page");
        link.appendChild(linktext);
        link.title = "Visit town page";
        link.href = "#"
        link.className = "firstlink";

        let link2 = document.createElement("a");
        let linktext2 = document.createTextNode("Visit town page");
        link2.appendChild(linktext2);
        link2.title = "Visit town page";
        link2.href = "preston.html"
        link2.className = "secondlink";

        let link3 = document.createElement("a");
        let linktext3 = document.createTextNode("Visit town page");
        link3.appendChild(linktext3);
        link3.title = "Visit town page";
        link3.href = "#"
        link3.className = "thirdlink";

        townname.textContent = temples[i].name;
        towndesc.textContent = temples[i].motto;
        townyear.textContent = "Year founded: " + temples[i].yearFounded;
        townpop.textContent = "Population: " + temples[i].currentPopulation;
        townrain.textContent = "Average rainfall: " + temples[i].averageRainfall;
        images.setAttribute('src', temples[i].photo);
        front.appendChild(townname);
        back.appendChild(towndesc);
        back.appendChild(townyear);
        back.appendChild(townpop);
        back.appendChild(townrain);
        back.appendChild(link);
        back.appendChild(link2);
        back.appendChild(link3);
        front.appendChild(images);
        towninfo.appendChild(front);
        towninfo.appendChild(back);
        divWeathertowns.appendChild(towninfo);
        }
      });
    })