/* * */

const fs = require('fs');
const pJson = require('./package.json');

/* * */

const now = new Date();
const year = now.getFullYear();
const month = padNumber(now.getMonth() + 1);
const day = padNumber(now.getDate());
const hours = padNumber(now.getHours());
const minutes = padNumber(now.getMinutes());

const version = `${year}.${month}.${day}${hours}${minutes}`;

pJson.version = version;

fs.writeFileSync('./package.json', JSON.stringify(pJson, null, 4));

/* * */

function padNumber(number) {
  return number.toString().padStart(2, '0');
}
