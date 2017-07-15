'use strict';

function collect_all_even(collection) {
 return collection.filter(function (number) {
   return(number%2===0);
 })
}

module.exports = collect_all_even;
