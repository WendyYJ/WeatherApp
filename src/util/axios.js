import axios from 'axios';

export const getWeather = (city) => {
    return axios.get(`https://jr-weather-api.herokuapp.com/api/weather?cc=Australia&city=${city}`);
}