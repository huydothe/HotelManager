"use strict";
exports.__esModule = true;
exports.Guest = void 0;
var Guest = /** @class */ (function () {
    function Guest(firstname, lastname, dateofbirth, ID) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.ID = ID;
    }
    Guest.prototype.getfirstname = function () {
        return this.firstname;
    };
    Guest.prototype.setfirstname = function (firstname) {
        this.firstname = firstname;
    };
    Guest.prototype.getlastname = function () {
        return this.lastname;
    };
    Guest.prototype.setlastname = function (lastname) {
        this.lastname = lastname;
    };
    Guest.prototype.getdateofbirth = function () {
        return this.dateofbirth;
    };
    Guest.prototype.setdateofbirth = function (dateofbirth) {
        this.dateofbirth = dateofbirth;
    };
    Guest.prototype.getID = function () {
        return this.ID;
    };
    Guest.prototype.setID = function (ID) {
        this.ID = ID;
    };
    return Guest;
}());
exports.Guest = Guest;
