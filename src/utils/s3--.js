const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
  accessKeyId: 'AKIAQ7VTMSO3CFPDR7JY',
  secretAccessKey: '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',
});

var s3 = new AWS.S3();
var filePath = './data/file.txt';

//configuring parameters
var params = {
  Bucket: 'shippr-bucket',
  Body: fs.createReadStream(filePath),
  Key: 'shippr/media/' + Date.now() + '_' + path.basename(filePath),
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log('Error', err);
  }

  //success
  if (data) {
    console.log('Uploaded in:', data.Location);
  }
});
