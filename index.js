//Add New Card

let addCity = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-city-btn");
  const cityFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addCity = !addCity;
    if (addCity) {
      cityFormContainer.style.display = "block";
    } else {
      cityFormContainer.style.display = "none";
    }
  });
});

//Fetch Weather - Phoenix Defaulted in db.json

let addCard = document.querySelector('#city-collection')

function fetchCity() {
  fetch("http://localhost:3000/cities")
  .then(response => response.json())
  .then(cities => 
    cities.forEach (cities => createCityCard(cities))
    )
  }


document.addEventListener('DOMContentLoaded', function() {
  fetchCity();
});


function createCityCard(cities) {
  let inputcode = cities.inputcode 

  fetch(`https://api.zippopotam.us/us/${inputcode}`)
  .then(resp => resp.json())
  .then(city => {
    console.log("city data", city)

  const card = document.createElement('div');
  card.className = 'card';

  const h2 = document.createElement('h2');
  h2.textContent = `${city.places[0]["place name"]}, ${city.places[0]["state abbreviation"]}`;

  const p1 = document.createElement('p1');
  p1.textContent = `Postal Code: ${city["post code"]}`

  const p2 = document.createElement('p2');
  p2.textContent = `State: ${city.places[0]["state"]}`

  const p3 = document.createElement('p3');
  p3.textContent = `Country: ${city.country}`

  const button = document.createElement('button');
  button.className = 'remove';
  button.id = cities.id;
  button.innerText = 'Remove'

  button.addEventListener('click', removePostalCode)

  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChile(button);

  addCard.appendChild(card);
    })
}

//Add City to List

document.querySelector('form').addEventListener('submit', (e) => {

const formData = {
    inputcode: e.target[0].value,
  }
  
  const addNewCityPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      },
    body: JSON.stringify(formData) 
  }
  
  fetch('http://localhost:3000/cities', addNewCityPost)
  .then(response => response.json())
  .then(createCityCard)
})