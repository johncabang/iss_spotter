const request = require('request');

/*
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org?format=json`, (error, response, body) => {


    // pass through error to the callback if error occurs when requesting IP data
    if (error) {
      callback(error, null);
    }

    // fi non-200 status, assume server error
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);


  });
};


const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    // console.log('body:', body);
    // inside the request callback
    // error can be set if invalide domain, user is offline, etc.
    if (error) {
      callback(error, null);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const latitude = JSON.parse(body).data.latitude;
    const longitude = JSON.parse(body).data.longitude;
    const coordinates = { latitude, longitude };
    callback(null, coordinates);
  
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };