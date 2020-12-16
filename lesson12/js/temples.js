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
        let templeSummary2 = document.createElement('p');
        templeSummary2.className = "templeSummary";
        let templePhone = document.createElement('p');
        let templeMail = document.createElement('p');
        let templeHistory = document.createElement('h3');
        let templeHistory1 = document.createElement('p');
        let templeHistory2 = document.createElement('p');
        let templeHistory3 = document.createElement('p');
        let templeServices = document.createElement('h3');
        let templeServices1 = document.createElement('p');
        let templeServices2 = document.createElement('p');
        let templeServices3 = document.createElement('p');
        let templeServices4 = document.createElement('p');
        let templeOrdinance = document.createElement('p');
        let templeSummary = document.createElement('p');

        let link = document.createElement("a");
        let linktext = document.createTextNode("Book Appointment");
        link.appendChild(linktext);
        link.title = "Book Appointment";
        link.href = "reservation.html"
        link.className = "firstlink";

        templename.textContent = temples[i].name;
        templeSummary2.textContent = temples[i].summary;
        templePhone.textContent = temples[i].telephone;
        templeMail.textContent = temples[i].email;
        templeHistory.textContent = "Notable Events:";
        templeHistory1.textContent = temples[i].history[0];
        templeHistory2.textContent = temples[i].history[1];
        templeHistory3.textContent = temples[i].history[2];
        templeServices.textContent = "Services: ";
        templeServices1.textContent = temples[i].services[0];
        templeServices2.textContent = temples[i].services[1];
        templeServices3.textContent = temples[i].services[2];
        templeServices4.textContent = temples[i].services[3];
        templeOrdinance.textContent = "Ordinances: " + temples[i].ordinance;
        templeSummary.textContent = temples[i].address[0] + ", " + temples[i].address[1] + ", " + temples[i].address[2] + ", " + temples[i].address[3];
      
        front.appendChild(templename);
        back.appendChild(templeSummary2);
        templeSummary.appendChild(templePhone);
        templeSummary.appendChild(templeMail);
        templeSummary.appendChild(templeHistory);
        templeSummary.appendChild(templeHistory1);
        templeSummary.appendChild(templeHistory2);
        templeSummary.appendChild(templeHistory3);
        templeSummary.appendChild(templeServices);
        templeSummary.appendChild(templeServices1);
        templeSummary.appendChild(templeServices2);
        templeSummary.appendChild(templeServices3);
        templeSummary.appendChild(templeServices4);
        templeSummary.appendChild(templeOrdinance);
        back.appendChild(link);
        templeinfo.appendChild(front);
        templeinfo.appendChild(back);
        divWeathertowns.appendChild(templeinfo);
        divWeathertowns.appendChild(templeSummary);
        }
      });
    })