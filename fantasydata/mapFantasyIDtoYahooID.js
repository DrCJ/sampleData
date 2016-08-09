const fs = require('fs');

const playerDataByAvailable = require('./playerDataByAvailable.js');

const yahooIDs = playerDataByAvailable
  .filter(player => player.YahooPlayerID !== null)
  .map(player => {
    const object = {};
    object[player.YahooPlayerID] = player.PlayerID;
    return object;
  });

console.log('count:', yahooIDs.length);

fs.writeFile('yahooIDtoFantasyIDLookup.json', JSON.stringify(yahooIDs), (err => {
  if (err) {
    console.log('It broke!!');
  }
  console.log('its all goood!');
}));
