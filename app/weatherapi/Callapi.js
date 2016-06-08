var axios = require('axios');

var _apiKey = '286b45144a15ddda6cdc4c52f022166f';

function getCityCurrentWeather(city) {
     return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + _apiKey);
}

function getCity5DaysForcast(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +'&type=accurate&APPID='+ _apiKey + '&cnt=6');
}

var Callapi = {
    getWeather: function (city) {
        return getCityCurrentWeather(city)
    },

    getDaysForcast: function(city) {
        return getCity5DaysForcast(city)
    },
};

module.exports = Callapi;
