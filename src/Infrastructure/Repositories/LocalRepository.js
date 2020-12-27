const fs = require('fs');

class LocalRepository {
    constructor() {
    }

    async save(path, name) {
        const outPath = __dirname + '/../../../storage/' + name;
        fs.renameSync(path, outPath);
    }
}

module.exports = LocalRepository