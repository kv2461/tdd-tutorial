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

module.exports = incrementString;