export default function fetchCountries(name) {
  const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// // https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
// // https://restcountries.com/v3.1/all?fields=name,capital,currencies

// // name.official - повна назва країни
// // capital - столиця
// // population - населення
// // flags.svg - посилання на зображення прапора
// // languages - масив мов
