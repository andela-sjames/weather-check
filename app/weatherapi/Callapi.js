var React = require('react');
var axios = require('axios');

var _apiKey = '286b45144a15ddda6cdc4c52f022166f';

function getCityCurrentWeather(city) {
     return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + _apiKey);
}

function getCity5DaysForcast(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +'&type=accurate&APPID='+ _apiKey + '&cnt=5');
}

var Callapi = {
    getWeather: function (city) {
        return getCityCurrentWeather(city)
            .then(function (response) {
                console.log(response.data);
        })
            .catch(function (response) {
                console.warn(response.data);
        });
    },

    getDaysForcast: function(city) {
        return getCity5DaysForcast(city)
            .then(function (response) {
                console.log(response.data);
        })
            .catch(function (response) {
                console.warn(response.data);
        });
    },
};

module.exports = Callapi;
