'use strict';

function choose_no_repeat_number(collection) {
    return collection.filter(function (number,tag ,collection) {
      return collection.indexOf(number)===tag;
    });
}

module.exports = choose_no_repeat_number;
