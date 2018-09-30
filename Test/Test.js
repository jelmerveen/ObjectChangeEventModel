"use strict";
exports.__esModule = true;
var PennionModel_1 = require("../PennionModel");
var jsonData = JSON.stringify({ Title: "Hello" });
function action() {
    console.log("Action fired = " + JSON.stringify(model.content));
}
var model = new PennionModel_1.PennionModel(jsonData, action);
console.log("pre-change = " + JSON.stringify(model));
model.content.Title += " Event!";
