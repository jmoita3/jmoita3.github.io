window.addEventListener("load", (event)=>{
    const requestURL = 'js/test.JSON',
      divWeathertowns = document.querySelector('div.weathertowns');
  
    fetch(requestURL)
    .then(response=>response.json())
    .then(jsonObject=>{
      const temples = jsonObject['temples'];
        let temples1 = [0,1,2,3];
      for ( let i of temples1 ){
  
        let templeinfo = document.createElement('section');
        let front = document.createElement('div');
        front.className = "front card";
        let back = document.createElement('div');
        back.className = "back card";
        let templename = document.createElement('h2');
        let templeAddress = document.createElement('h3');
        let templePhone = document.createElement('p');
        let templeMail = document.createElement('p');
        let templeHistory = document.createElement('p');
        let templeHistory1 = document.createElement('p');
        let templeHistory2 = document.createElement('p');
        let templeHistory3 = document.createElement('p');
        let templerain = document.createElement('p');
        let templeOrdinance = document.createElement('p');
        let templeSummary = document.createElement('p');

        let link = document.createElement("a");
        let linktext = document.createTextNode("Book Appointment");
        link.appendChild(linktext);
        link.title = "Book Appointment";
        link.href = "#"
        link.className = "firstlink";

        templename.textContent = temples[i].name;
        templeAddress.textContent = temples[i].address[0] + ", " + temples[i].address[1] + ", " + temples[i].address[2] + ", " + temples[i].address[3];
        templePhone.textContent = temples[i].telephone;
        templeMail.textContent = temples[i].email;
        templeHistory.textContent = "Notable Events:";
        templeHistory1.textContent = temples[i].history[0];
        templeHistory2.textContent = temples[i].history[1];
        templeHistory3.textContent = temples[i].history[2];
        templerain.textContent = "Services: " + temples[i].services;
        templeOrdinance.textContent = "Ordinance: " + temples[i].ordinance;
        templeSummary.textContent = "Ordinance: " + temples[i].summary;
        front.appendChild(templename);
        back.appendChild(templeAddress);
        back.appendChild(templePhone);
        back.appendChild(templeMail);
        templeSummary.appendChild(templeHistory);
        templeSummary.appendChild(templeHistory1);
        templeSummary.appendChild(templeHistory2);
        templeSummary.appendChild(templeHistory3);
        back.appendChild(templerain);
        back.appendChild(templeOrdinance);
        back.appendChild(link);
        templeinfo.appendChild(front);
        templeinfo.appendChild(back);
        divWeathertowns.appendChild(templeinfo);
        divWeathertowns.appendChild(templeSummary);
        }
      });
    })