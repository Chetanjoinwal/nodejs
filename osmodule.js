const os = require("os");
const { exec } = require('child_process');

const newHostname = 'Chetan Joinwal';

exec(`sudo hostnamectl set-hostname ${newHostname}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Hostname changed to: ${newHostname}`);
});

// console.log(os.freemem());
// console.log(os.homedir());
console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());