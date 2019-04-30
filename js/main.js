//DOM elements
const searchInput = document.querySelector('input#search');
const scoreField = document.querySelector('#list');

const searchCities = async searchText => {
    const res = await fetch('../data/states.json');
    const cities = await res.json();

    //get matches to current text input
    let matches = cities.filter(city => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return city.name.match(regex);
    });

    //if text in input will be empty
    if(searchText.length === 0){
        matches = [];
    }
    
    //function to watch our score
    outputHtml(matches);
};

//show results in HTML

searchInput.addEventListener('input', () => searchCities(search.value));