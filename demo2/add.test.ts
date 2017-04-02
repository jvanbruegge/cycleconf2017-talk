import { forall, integer, assert, Options } from 'jsverify';

import { add } from './add';

const testOptions : Options = {
    size: 200,
    quiet: false
};

describe('add tests', () => {

    it('positive and negative should equal zero', () => {

        const property = forall(integer, n => {
            return add(n, -n) === 0 && add(-n, n) === 0;
        });
        assert(property, testOptions);

    });
    
    it('adding zero should not change number', () => {

        const property = forall(integer, n => {
            return add(n, 0) === n && add(0, n) === n;
        });
        assert(property, testOptions);

    });

});
