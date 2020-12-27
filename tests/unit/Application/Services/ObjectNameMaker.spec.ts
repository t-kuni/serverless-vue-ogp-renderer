const ObjectNameMaker = require('../../../../src/Application/Services/ObjectNameMaker');

const assert = require('assert');

describe('ObjectNameMaker#makeName', () => {
    it('Can make name with body params', async () => {
        /*
         * Prepare
         */

        /*
         * Run
         */
        const maker = new ObjectNameMaker();
        const body = {
            id: "1234"
        };
        const actual = maker.makeName("[body:id].png", body);
        const expect = "1234.png";

        /*
         * Assert
         */
        assert.equal(actual, expect);
    });

    it('Can make name with nested body params', async () => {
        /*
         * Prepare
         */

        /*
         * Run
         */
        const maker = new ObjectNameMaker();
        const body = {
            sys: {
                id: "nested"
            }
        };
        const actual = maker.makeName("[body:sys.id].png", body);
        const expect = "nested.png";

        /*
         * Assert
         */
        assert.equal(actual, expect);
    });

    it('Can make name with uuid', async () => {
        /*
         * Prepare
         */

        /*
         * Run
         */
        const maker = new ObjectNameMaker();
        const body = {
            id: "1234"
        };
        const actual = maker.makeName("[uuid].png", body);
        const expect = "6d6ed398-217f-4176-94e2-6961f4733b66.png";

        /*
         * Assert
         */
        assert.equal(actual, expect);
    });
});