const incrementString = require('../js/increment');



describe('incrementString', () => {
  it('If the string already ends with a number, the number should be incremented by 1.', () => {
    let strng = 'foo'
    const answer = incrementString(strng);

    expect(answer).toBe('foo1');
  })

  it('If the string already ends with a number, the number should be incremented by 1.', () => {
    let strng = 'foobar23';
    const answer = incrementString(strng);

    expect(answer).toBe('foobar24');
  })

  it('Leading zeroes', () => {
    let strng = 'foobar0042';
    const answer = incrementString(strng);

    expect(answer).toBe('foobar0043');
  })

  it('Leading zeroes are maxed out', () => {
    let strng = 'foobar9';
    const answer = incrementString(strng);

    expect(answer).toBe('foobar10');
  })

  it('Leading zeroes but integer to be updated is a 9', () => {
    let strng = 'foobar09';
    const answer = incrementString(strng);

    expect(answer).toBe('foobar10');
  })

  it('All 9s', () => {
    let strng = 'foobar999';

    const answer = incrementString(strng);

    expect(answer).toBe('foobar1000')
  })
})


