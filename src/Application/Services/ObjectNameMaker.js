const os = require('os');
const { v4: uuidv4 } = require('uuid');

class ObjectNameMaker {
    constructor() {
    }

    makeName(format, body) {
        const tags = format.match(/(\[.+])/g);

        if (!tags) {
            return format;
        }

        const replacers = tags.map((tag) => {
            return {
                from: tag,
                to: this.parseTag(tag, body),
            }
        })

        return replacers.reduce((prev, replacer) => prev.replace(replacer.from, replacer.to), format);
    }

    parseTag(tag, body) {
        if (tag === '[uuid]') {
            return uuidv4();
        }

        if (tag.match(/^\[body:/)) {
            const key = tag.replace('[body:', '').replace(']', '');
            const keys = key.split('.');
            return keys.reduce((body, key) => body[key], body);
        }
    }
}

module.exports = ObjectNameMaker