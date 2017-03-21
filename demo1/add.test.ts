import * as assert from 'assert';

import { add } from './add';

describe('add tests', () => {
    
    it('should handle different numbers', () => {
       
        assert(add(1, 2) === 3);
        assert(add(4, 10) === 14);
        assert(add(21, 56) === 77);
        assert(add(19, 33) === 52);

    });

    it('should handle same numbers', () => {

        assert(add(1, 1) === 2);
        assert(add(0, 0) === 0);
        assert(add(10, 10) === 20);

    });

    it('should handle negative numbers', () => {

        assert(add(1, -1) === 0);
        assert(add(-100, 0) === -100);
        assert(add(10, -5) === 5);

    });

});
