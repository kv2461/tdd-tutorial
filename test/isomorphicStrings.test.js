const isIsomorphic = require("../js/isomorphicStrings");

describe('isIsomorphic',() => {
    it('returns true', () => {
        let s = 'egg';
        let t = 'add';

        expect(isIsomorphic(s,t)).toBe(true);
    })

    it('returns false', () => {
        let s = 'foo';
        let t = 'bar';

        expect(isIsomorphic(s,t)).toBe(false);
    })

    it('returns true', () => {
        let s = 'paper';
        let t = 'title';

        expect(isIsomorphic(s,t)).toBe(true);
    })
});

