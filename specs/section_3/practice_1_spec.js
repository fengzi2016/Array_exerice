'use strict';

var create_updated_collection = require("../../practices/section_3/practice_1/practice.js");

describe('practice-3-1', function() {

  var collection_a = [
    {name: "a", summary: 2},
    {name: "e", summary: 2},
    {name: "h", summary: 2},
    {name: "t", summary: 2},
    {name: "f", summary: 2},
    {name: "c", summary: 2},
    {name: "g", summary: 2},
    {name: "b", summary: 2},
    {name: "d", summary: 2}
  ];

  var object_b = {value: ["a", "d", "e", "f"]};

  it("选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count-1，输出减过之后的新A集合", function() {
    var result = create_updated_collection(collection_a, object_b);

    expect(result).toEqual([
      {name: "a", summary: 1},
      {name: "e", summary: 1},
      {name: "h", summary: 2},
      {name: "t", summary: 2},
      {name: "f", summary: 1},
      {name: "c", summary: 2},
      {name: "g", summary: 2},
      {name: "b", summary: 2},
      {name: "d", summary: 1}
    ]);
  });
});
