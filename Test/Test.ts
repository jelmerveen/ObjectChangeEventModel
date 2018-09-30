import { PennionModel } from "../PennionModel";

var jsonData = JSON.stringify({ Title: "Hello"});

function action() {
    console.log("Action fired = " + JSON.stringify(model.content));
}

let model = new PennionModel(jsonData, action);

console.log("pre-change = " + JSON.stringify(model));
model.content.Title += " Event!";