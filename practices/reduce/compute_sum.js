'use strict';

function calculate_elements_sum(collection) {
    return collection.reduce(function (sum,value) {
      return sum+value;
    },0);
}

module.exports = calculate_elements_sum;

