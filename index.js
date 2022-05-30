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

//Fetch Weather - Phoenix Defaulted

let addCard = document.querySelector('#city-collection')

function fetchCity() {
  fetch("https://api.zippopotam.us/us/85001")
  .then(response => response.json())
  .then(city => createCityCard(city))
  }


document.addEventListener('DOMContentLoaded', function() {
  fetchCity();
});


function createCityCard(city) {
    console.log("here", city)

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

  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);

  addCard.appendChild(card);
}