module.exports = function () {
    "use strict";
    if (Object.create === "undefined") {
        Object.create = function (prototype) {
            function C() { };
            C.prototype = prototype;
            return new C();
        }
    }

    if (Object.getPrototypeOf === "undefined") {
        Object.getPrototypeOf = function (obj) {
            const t = typeof obj;
            if (!obj || (t !== "function" && t !== "object"))
                throw new Error('type error');
            return obj.__proto__;
        }
    }

}