// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/rescript-jest/src/jest.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var TodoItem = require("../TodoItem.bs.js");
var ReactTestingLibrary = require("../external/ReactTestingLibrary.bs.js");

var item = {
  text: "one",
  completed: false,
  createdAt: 0,
  id: 1
};

Jest.test("onClick is called when clicking", (function (param) {
        var result = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(TodoItem.make, {
                  todo: item,
                  onClick: (function (param) {
                      
                    })
                }));
        ReactTestingLibrary.act(function (param) {
              Curry._2(ReactTestingLibrary.FireEvent.click, undefined, ReactTestingLibrary.getByRole({
                        NAME: "Str",
                        VAL: "checkbox"
                      }, undefined, result));
            });
        return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(result.container));
      }));

exports.item = item;
/*  Not a pure module */
