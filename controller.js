"use strict";
exports.__esModule = true;
exports.Controller = void 0;
var Controller = /** @class */ (function () {
    function Controller() {
        this.Info = [];
    }
    Controller.prototype.EnterInfo = function (guest) {
        return this.Info.push(guest);
    };
    Controller.prototype.deleteInfo = function (firstname, lastname, ID) {
        for (var i = 0; i < this.Info.length; i++) {
            if (this.Info[i].firstname === firstname &&
                this.Info[i].lastname === lastname &&
                this.Info[i].ID === ID) {
                this.Info.splice(i, 1);
            }
        }
        return this.Info;
    };
    return Controller;
}());
exports.Controller = Controller;
