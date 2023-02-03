const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
//   when you fetch it sends back a promise which is handled with .then
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what was sreached
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
    <li>
    <span class="name>${cityName}, ${stateName}</span>
<span class="population">${numberWithCommas(place.population)}</span>

    
    
    
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}
const sreachInput = document.querySelector(".sreach");
const suggestions = document.querySelector(".suggestions");
sreachInput.addEventListener("change", displayMatches);
sreachInput.addEventListener("keyup", displayMatches);
