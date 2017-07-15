'use strict';

var create_updated_collection = require("../../practices/section_3/practice_4/practice.js");

describe('practice-3-4', function() {

  var collection_a = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
    "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c", "c", "c", "c", "c", "c", "c", "c",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d-5"
  ];


  var object_b = {value: ["a", "d", "e", "f"]};

  it("统计出A集合中相同的元素的个数，有过有-就把-右边的数字也计算入个数，形成C集合，C集合中的元素要形如{name:\"a\", summary: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合", function() {
    var result = create_updated_collection(collection_a, object_b);

    expect(result).toEqual([
      {name: "a", summary: 2},
      {name: "e", summary: 5},
      {name: "h", summary: 11},
      {name: "t", summary: 20},
      {name: "f", summary: 6},
      {name: "c", summary: 8},
      {name: "g", summary: 7},
      {name: "b", summary: 6},
      {name: "d", summary: 4}
    ]);
  });
});
