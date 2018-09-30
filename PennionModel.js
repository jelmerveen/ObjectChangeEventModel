"use strict";
exports.__esModule = true;
var ObjectWatch_1 = require("./ObjectWatch/ObjectWatch");
var PennionModel = /** @class */ (function () {
    function PennionModel(_content, _functionAfterObjectChanged) {
        this._content = _content;
        this._functionAfterObjectChanged = _functionAfterObjectChanged;
        var jsonObject = JSON.parse(_content);
        this.content = ObjectWatch_1.WatchObject(jsonObject, _functionAfterObjectChanged);
    }
    return PennionModel;
}());
exports.PennionModel = PennionModel;
