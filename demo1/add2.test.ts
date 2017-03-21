import { forall, integer, assert } from 'jsverify';

import { add } from './add';

describe('add tests', () => {

    it('positive and negative should equal zero', () => {

        const property = forall(integer, n => {
            return add(n, -n) === 0 && add(-n, n) === 0;
        });
        assert(property);

    });
    
    it('adding zero should not change number', () => {

        const property = forall(integer, n => {
            return add(n, 0) === n && add(0, n) === n;
        });
        assert(property, {
            size: 200
        });

    });

});
