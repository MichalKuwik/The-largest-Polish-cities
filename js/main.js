//DOM elements
const searchInput = document.querySelector('input#search');
const scoreField = document.querySelector('#list');

const searchCities = async (searchText) => {
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
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-2">
                <h4>Nazwa miasta: <span class="text-primary"> ${match.name} </span> <br>
                    Województwo: <span class="text-primary"> ${match.voivodeship} </span> <br>
                    Powierzchnia miasta: <span class="text-primary"> ${match.surface} km² </span> <br>
                    Liczba mieszkańców: <span class="text-primary"> ${match.population} osób </span><br>
                    <span><img class="img-state" src=${match.img} alt="herb"/></span>
                </h4>
            </div>
        `).join('');

        //see score on div#list
        scoreField.innerHTML = html;
    }
}

searchInput.addEventListener('input', () => searchCities(search.value));