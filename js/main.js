//DOM elements
const searchInput = document.querySelector('input#search');
const scoreField = document.querySelector('#list');

const searchCities = async searchText => {
    const res = await fetch('../data/states.json');
    const cities = await res.json();

    console.log(cities);
}

searchInput.addEventListener('input', () => searchCities(search.value));