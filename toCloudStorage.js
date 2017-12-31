// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();
const bucketName = 'latitude-general.appspot.com';
const prompt = require('prompt');
prompt.start();

prompt.get('filename', function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
var filename = result.filename;
//Uploads a local file to the bucket
  storage
	.bucket(bucketName)
	.upload(filename)
	.then(() => {
	  console.log(`${filename} uploaded to ${bucketName}.`);
	})
	.catch(err => {
	  console.error('ERROR:', err);
	});
});