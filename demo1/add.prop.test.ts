import { forall, integer, assert } from 'jsverify';

import { add } from './add';

describe('add tests', () => {

    it('should work for all numbers', () => {

        const property = forall(integer, integer, (n, m) => {
            return add(n, m) === n + m;
        });
        assert(property, {
            quiet: false,
            //size: 200
        });

    });

});
