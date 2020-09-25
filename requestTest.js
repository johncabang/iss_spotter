const request = require('request');
request('https://ipvigilante.com/json/8.8.8.8', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(JSON.parse(body))

  console.log(JSON.parse(body).data.latitude);
  console.log(JSON.parse(body).data.longitude);

});





// const request = require('request');
// request('https://api.ipify.org?format=json', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// console.log(JSON.parse(body))
// });