"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Hotel = void 0;
var Guest_1 = require("./Guest");
var Hotel = /** @class */ (function (_super) {
    __extends(Hotel, _super);
    function Hotel(firstname, lastname, dateofbirth, ID, numberOfDay, typeOfRoom, pricesOfRoom, infoOfGuest) {
        var _this = _super.call(this, firstname, lastname, dateofbirth, ID) || this;
        _this.numberOfDay = numberOfDay;
        _this.typeOfRoom = typeOfRoom;
        _this.pricesOfRoom = pricesOfRoom;
        _this.infoOfGuest = infoOfGuest;
        return _this;
    }
    Hotel.prototype.getnumberOfDay = function () {
        return this.numberOfDay;
    };
    Hotel.prototype.setnumberOfDay = function (numberOfDay) {
        this.numberOfDay = numberOfDay;
    };
    Hotel.prototype.gettypeOfRoom = function () {
        return this.typeOfRoom;
    };
    Hotel.prototype.settypeOfRoom = function (typeOfRoom) {
        this.typeOfRoom = typeOfRoom;
    };
    Hotel.prototype.getpricesOfRoom = function () {
        return this.pricesOfRoom;
    };
    Hotel.prototype.setpricesOfRoom = function (pricesOfRoom) {
        this.pricesOfRoom = pricesOfRoom;
    };
    Hotel.prototype.getinfoOfGuest = function () {
        return this.infoOfGuest;
    };
    Hotel.prototype.setinfoOfGuest = function (infoOfGuest) {
        this.infoOfGuest = infoOfGuest;
    };
    return Hotel;
}(Guest_1.Guest));
exports.Hotel = Hotel;
