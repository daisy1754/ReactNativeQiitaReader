#! /usr/bin/env node

const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
if (args.length == 0 || args[0].length == 0) {
  throw new Error("APPETIZE_API_TOKEN must be set");
}

console.log("Uploading apk...");
request.post({
  url: `https://${args[0]}@api.appetize.io/v1/apps`,
  formData:  {
    platform: 'android',
    file: fs.createReadStream('android/app/build/outputs/apk/app-release.apk'),
  }
}, function (err, res, body) {
  if (err) {
    throw new Error("Failed to upload apk", err);
  } else {
    console.log(`App is succeesfully uploaded!`);
    console.log(JSON.parse(body).publicURL);
  }
});
