const S3Repository = require('./src/Infrastructure/Repositories/S3Repository')
const LocalRepository = require('./src/Infrastructure/Repositories/LocalRepository')

const container = {};

container.storage = process.env.IMAGE_STORAGE === 's3' ? new S3Repository() : new LocalRepository();

module.exports = {
    resolve(key) {
        return container[key];
    }
}