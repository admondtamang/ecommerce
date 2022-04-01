require('dotenv').config();
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET_NAME || 'shippr-bucket';
const region = process.env.AWS_BUCKET_REGION || 'ap-south-1';
const accessKeyId = process.env.AWS_ACCESS_KEY || 'AKIAQ7VTMSO3CFPDR7JY';
const secretAccessKey = process.env.AWS_SECRET_KEY || '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';

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;

// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream;
