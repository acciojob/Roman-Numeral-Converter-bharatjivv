function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  const subtractives = {
    900: 'CM',
    400: 'CD',
    90: 'XC',
    40: 'XL',
    9: 'IX',
    4: 'IV'
  };

  let result = '';

  for (let key of Object.keys(subtractives).map(Number).sort((a, b) => b - a)) {
    while (num >= key) {
      result += subtractives[key];
      num -= key;
    }
  }

  for (let i = 0; i <= 6; i++) {
    let [symbol, value] = obj[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}


module.exports = convertToRoman;
