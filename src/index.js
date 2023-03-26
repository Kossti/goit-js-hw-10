import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './js/renderStyle.scss';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const contryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(event) {
  const nameCountries = event.target.value.trim();
  if (nameCountries) {
    fetchCountries(nameCountries)
      .then(countries => {
        renderCountries(countries);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else {
    contryList.innerHTML = '';
    countryInfo.innerHTML = '';
  }
}
