const axios = require('axios');

const getWeather = async(lat, lng) => {
    let lati = encodeURI(lat);
    let leng = encodeURI(lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${leng}&units=metric&appid=0398b20dc291f8cd2954c014175d2a8c`)
      
    let data = resp.data.main.temp;
    return data;
}

module.exports = {
    getWeather
}