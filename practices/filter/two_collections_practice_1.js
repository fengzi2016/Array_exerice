'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (number) {
    return collection_b.indexOf(number) !== -1;
  });
}
module.exports = choose_common_elements;
