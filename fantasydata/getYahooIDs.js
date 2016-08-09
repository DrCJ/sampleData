const fs = require('fs');

const playerDataByAvailable = require('./playerDataByAvailable.json');

var yahooIDs = playerDataByAvailable.map(player => player.YahooPlayerID);
yahooIDs = yahooIDs.filter(val => val !== null);
console.log('count:', yahooIDs.length);

fs.writeFile('yahooIDs.json', JSON.stringify(yahooIDs), (err => {
  if (err) {
    console.log('It broke!!');
  }
  console.log('its all goood!');
}));
