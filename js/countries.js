const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('countries-container');

    // for(const country of countries){
    //     console.log(country);
    // }


    // Similar to above loop
    countries.forEach(country => {
        // console.log(country.cca2);
        const countryDiv = document.createElement('div');

        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h2>Name: ${country.name.common}</h2> 
            <h5>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h5>
            <button onclick="countryDetails('${country.cca2}')">Details</button>   
        `;

        countryContainer.appendChild(countryDiv);
    })
}

const countryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetails(data))
}

const showCountryDetails = country => {
    const detailsContainer = document.getElementById('details-container');
    console.log(country[0]);

    detailsContainer.innerHTML = `
        <h2>Name: ${country[0].name.common}</h2>
        <h3>Capital: ${country[0].capital[0]}</h3>
        <img src='${country[0].flags.png}'>
    `

    
}

loadCountries();