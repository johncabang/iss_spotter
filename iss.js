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
  request(``, (error, response, body) => {



  })
};


module.exports = { fetchMyIP, fetchCoordsByIP };



// Test case

// const request = require('request');
// request('https://api.ipify.org?format=json', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });