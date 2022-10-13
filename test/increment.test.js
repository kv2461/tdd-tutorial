function incrementString (strng) {
  let array = strng.split('');
  if (!Number.isInteger(parseInt(array[array.length-1]))) {
    return `${strng}1`;
  } else {
    if ((array[array.length-1] != 9) || (array[array.length-1] == 9 && (array[array.length-2] != 0) && array[array.length-2] !=9 )) { //makes sure it only works if there's no leading zeros if its a 9
      array[array.length-1] = parseInt(array[array.length-1]) + 1;
    } else { //if there are leading zeros and it was a 9
      let remainder = 1;
      let currentIndex = array.length - 1;
      let leftOfCurrentIndex = currentIndex - 1;
      while (remainder != 0) {
        if ((array[currentIndex] == 9 && array[leftOfCurrentIndex] != 9)) {
          array[currentIndex] = 0;
          if (Number.isInteger(parseInt(array[leftOfCurrentIndex]))) {
            array[leftOfCurrentIndex] = parseInt(array[leftOfCurrentIndex] + 1);
          } else {
            array[currentIndex] = 10;
          }
          remainder--;
        } else if ((array[currentIndex] == 9 && array[leftOfCurrentIndex] == 9)) { //adjacent 9's 
          array[currentIndex] = 0;
          currentIndex--;
          leftOfCurrentIndex--;
        }
      }
    }
  }
  return array.join('');
}



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


