const { fetchMyIP } = require('./iss');



fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP.' , ip);
});


// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('99.227.233.212',(error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Coordinates.', coordinates);
// });