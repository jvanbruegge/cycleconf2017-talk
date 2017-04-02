import { forall, integer, assert, Options } from 'jsverify';

import { add } from './add';

const testOptions : Options = {
    size: 200,
    quiet: true
};

describe('add tests', () => {
    
    it('Identity', () => {

        const property = forall(integer, a => {
            return add(a, 0) === a && add(0, a) === a;
        });
        assert(property, testOptions);

    });

    it('Negation', () => {

        const property = forall(integer, a => {
            return add(a, -a) === 0 && add(-a, a) === 0;
        });
        assert(property, testOptions);

    });

    it('Commutative', () => {

        const property = forall(integer, integer, (a, b) => {
            return add(a, b) === add(b, a);
        });
        assert(property, testOptions);

    });
    
    it('Associative', () => {

        const property = forall(integer, integer, integer, (a, b, c) => {
            return add(add(a, b), c) === add(a, add(b, c));
        });
        assert(property, testOptions);

    });

});
