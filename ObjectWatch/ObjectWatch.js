"use strict";
exports.__esModule = true;
function WatchObject(object, afterObjectChanged) {
    var handler = {
        get: function (target, property, receiver) {
            try {
                return new Proxy(target[property], handler);
            }
            catch (err) {
                return Reflect.get(target, property, receiver);
            }
        },
        defineProperty: function (target, property, descriptor) {
            var updateRef = Reflect.defineProperty(target, property, descriptor);
            afterObjectChanged();
            return updateRef;
        },
        deleteProperty: function (target, property) {
            var updateRef = Reflect.deleteProperty(target, property);
            afterObjectChanged();
            return updateRef;
        }
    };
    return new Proxy(object, handler);
}
exports.WatchObject = WatchObject;
;
//Based on code provided by https://github.com/sindresorhus/on-change/
//Modified by Jelmer Veen
