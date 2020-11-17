window.addEventListener("load", (event)=>{
    const requestURL = 'https://www.ahfx.com/person.php',
      divWeathertowns = document.querySelector('div.weathertowns');
let h = new Headers({
})


  
    fetch(requestURL)
    .then(response=>response.json())
    .then(jsonObject=>{
      const person = jsonObject['person'];
        let personinfo = document.createElement('section');

        let name = document.createElement('h2');
        name.textContent = person.personal.name;
        personinfo.appendChild(name);

        let Password = document.createElement('h2');
        Password.textContent = person.online_info.password;
        personinfo.appendChild(Password);

        let Email = document.createElement('h2');
        Email.textContent = person.online_info.email;
        personinfo.appendChild(Email);

        let eyecolor = document.createElement('h2');
        eyecolor.textContent = person.personal.eye_color;
        personinfo.appendChild(eyecolor);

        let city = document.createElement('h2');
        city.textContent = person.personal.city;
        personinfo.appendChild(city);

        divWeathertowns.appendChild(personinfo);
      });
    })