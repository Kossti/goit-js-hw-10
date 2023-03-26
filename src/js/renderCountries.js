import { Notify } from 'notiflix';

export default function renderCountries(nameCountries) {
  const contryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');

  let countries = [];

  let numberOfCountries = nameCountries.length;
  if (numberOfCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (numberOfCountries <= 10 && numberOfCountries > 2) {
    nameCountries.map(country => {
      countries += `
        <li>
            <img src="${country.flags.svg}" class="flag"/>
            <span class="country-name">${country.name}</span>
        <li>
        `;
      contryList.innerHTML = countries;
    });
    countryInfo.innerHTML = '';
  } else {
    let country = nameCountries[0];
    let languages = [];

    country.languages.map(language => {
      languages.push(language.name);
    });

    countryInfo.innerHTML = `
        <div class="country-header">
            <img src="${country.flags.svg}" class="flag" />
            <h2 class="titel">${country.name}</h2>
        </div>
        <ul class ="list-countries">
            <li>
                <span>Capital: </span>${country.capital}
            </li>
            <li>
                <span>Population: </span>${country.population}
            </li>
            <li>
                <span>Languages: </span>${languages.join(', ')}
            </li>
        </ul>
      `;
    contryList.innerHTML = '';
  }
}
