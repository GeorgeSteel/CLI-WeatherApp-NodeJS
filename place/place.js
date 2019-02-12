const axios = require('axios');

const getPlaceLatLng = async(direction) => {
    let encodedURL = encodeURI(direction);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAJvf3CouGgLQY7QejEkjcC4Iy2iNTC70A`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results for ${direction}`);
    }    
    
    
    let data = resp.data.results[0];
    let coors = data.geometry.location;
        

    return {
        direction: data.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getPlaceLatLng
}