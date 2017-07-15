'use strict';


function find_first_even(collection) {
  return collection.find(function(number) {
    return number%2===0;
  });
}

module.exports = find_first_even;

