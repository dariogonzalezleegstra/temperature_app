import axios from 'axios';


const API_KEY = 'ae1fd51c3e4bfdaa8b9704d9d248230f';

//ES6 syntax
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Se declara una const como buena practica para reutilizarla en los reducers & actions
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {

    const url = `${ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);

    console.log('Request: ',request);

    return {
        type: FETCH_WEATHER,
        payload: request // <= It's the promise!

        /*
            Podria no ser una promise.
            Como es una promise, el middleware que instale
            (redux-promise) va a detener la promise y "convertirla" (crear una nueva)
            en el objeto con los datos que buscamos para el reducer.
            Si no fuera una promise, simplemente se la envia al reducer
            sin ningún tipo de procesamiento y no hay problema.
            Claramente, la ventaja de redux-promise es que es asíncrono.
        */
    };
}

