const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');

let getInfo = async (direction) => {
    try {
        let coors = await place.getPlaceLatLng(direction);
        let temp = await weather.getWeather(coors.lat, coors.lng);
    
        return `El clima en ${ coors.direction } es de ${ temp } ºC`;        
    } catch (error) {
        return `Can't determinate the weather of ${direction}`;
    }
}

getInfo(argv.direction)
        .then(resp => console.log(resp))
        .catch(err => console.error(err))

