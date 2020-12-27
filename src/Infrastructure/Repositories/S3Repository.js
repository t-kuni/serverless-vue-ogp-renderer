const AWS = require('aws-sdk');
const fs = require('fs');

class S3Repository {
    constructor() {
        AWS.config.update({
            credentials: new AWS.Credentials(
                process.env.AWS_ACCESS_TOKEN,
                process.env.AWS_SECRET_ACCESS_TOKEN
            ),
        })

        this.s3 = new AWS.S3();
    }

    async save(path, name) {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: name,
            Body: fs.readFileSync(path),
            ContentType: 'image/png'
        };
        await this.s3.putObject(params).promise();
        return {
            Bucket: params.Bucket,
            Key: params.Key,
            ContentType: params.ContentType
        }
    }
}

module.exports = S3Repository