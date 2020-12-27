const os = require('os');
const { v4: uuidv4 } = require('uuid');

class TempImagePathMaker {
    constructor() {
    }

    makePath(ext) {
        return os.tmpdir() + '/' + uuidv4() + '.' + ext;
    }
}

module.exports = TempImagePathMaker