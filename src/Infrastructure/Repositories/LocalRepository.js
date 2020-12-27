const fs = require('fs');

class LocalRepository {
    constructor() {
    }

    async save(path, name) {
        const outPath = __dirname + '/../../../storage/' + name;
        fs.renameSync(path, outPath);
        return {
            Bucket: '/storage',
            Key: name,
            ContentType: 'image/png'
        }
    }
}

module.exports = LocalRepository