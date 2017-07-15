'use strict';

function choose_even(collection) {
  return collection.filter(function(number){
    return number%2===0;
  });
}

module.exports = choose_even;
