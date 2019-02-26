// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// STEP ONE
// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

// STEP TWO
// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

// STEP THREE
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

// STEP FOUR
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

var detectNetwork = function (cardNumber) {
  var twoPrefix = Number(cardNumber.slice(0, 2));
  var threePrefix = Number(cardNumber.slice(0, 3));
  var fourPrefix = Number(cardNumber.slice(0, 4));
  var sixPrefix = Number(cardNumber.slice(0, 6));

  // Diner's Club
  if (twoPrefix === 38 || twoPrefix === 39 && cardNumber.length === 14) {
    return 'Diner\'s Club';
  }

  // American Express
  if (twoPrefix === 34 || twoPrefix === 37 && cardNumber.length === 15) {
    return 'American Express';
  }

  // MasterCard
  for (var i = 51; i <= 55; i++) {
    if (twoPrefix === i && cardNumber.length === 16) {
      return 'MasterCard';
    }
  }

  // Discover
  if ((fourPrefix === 6011 || twoPrefix === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }

  for (var i = 644; i <= 649; i++) {
    if (threePrefix === i && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover';
    }
  }

  // Maestro
  for (var i = 12; i <= 19; i++) {
    if ((fourPrefix === 5018 || fourPrefix === 5020 || fourPrefix === 5038 || fourPrefix === 6304) && cardNumber.length === i) {
      return 'Maestro';
    }
  }

  // China UnionPay
  for (var i = 622126; i <= 622925; i++) {
    for (var j = 16; j <= 19; j++) {
      if (sixPrefix === i && cardNumber.length === j) {
        return 'China UnionPay';
      }
    }
  }

  for (var i = 624; i <= 626; i++) {
    for (var j = 16; j <= 19; j++) {
      if (threePrefix === i && cardNumber.length === j) {
        return 'China UnionPay';
      }
    }
  }

  for (var i = 6282; i <= 6288; i++) {
    for (var j = 16; j <= 19; j++) {
      if (fourPrefix === i && cardNumber.length === j) {
        return 'China UnionPay';
      }
    }
  }

  // Switch
  for (var i = 16; i <= 19; i++) {
    var switchPrefix = (fourPrefix === 4903 || fourPrefix === 4905 || fourPrefix === 4911 || fourPrefix === 4936 || fourPrefix === 6333 || fourPrefix === 6759 || sixPrefix === 564182 || sixPrefix === 633110)
    if (switchPrefix && cardNumber.length === i) {
      return 'Switch';
    }
  }

  // Visa
  if (Number(cardNumber[0]) === 4 && cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
    return 'Visa';
  }
};


