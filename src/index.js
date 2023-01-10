module.exports = function toReadable (number) {
    simpleNum = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      }
      let array = Array.from(number.toString(), Number)
      let firstNum = array[0];
      let secondNum = array[1];
      let thirdNum = array[2];
      let result;
      const countFromTwentyToHundred = (first, second) => {
        let result;
        if (first <= 1) {
          let newNumber = `${first}${second}`;
          let simpleCompare = Number(newNumber);
          result = simpleNum[simpleCompare];
        }
        switch(first) {
            case 2:
                result = ('twenty ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 3:
                result = ('thirty ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 4:
                result = ('forty ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 5:
                result = ('fifty ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 6:
                result = ('sixty ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 7:
                result = ('seventy ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 8:
                result = ('eighty ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
            case 9:
                result = ('ninety ' + simpleNum[second]).replace(/\s+/g, ' ').trim();
                break;
        }
        return result;
      }
      if (number === 0) {
        result = 'zero'
      } else if (number < 20) {
        result = simpleNum[number]
      } else if (number >= 19 && number < 100) {
        result = countFromTwentyToHundred(firstNum, secondNum)
      } else if (number >= 100 && String(number).length < 4) {
        let lastTwo = countFromTwentyToHundred(secondNum, thirdNum)
        result = (simpleNum[firstNum] + ' hundred ' + lastTwo).replace(/\s+/g, ' ').trim();
      }
      return result;
}
