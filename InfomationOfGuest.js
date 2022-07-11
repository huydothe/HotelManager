"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Guest_1 = require("./Guest");
var controller_1 = require("./controller");
var guest1 = new Guest_1.Guest('A', 'Nguyen', new Date('12/6/1999'), 101);
var guest2 = new Guest_1.Guest('B', 'Do', new Date('8/26/1991'), 102);
var guest3 = new Guest_1.Guest('C', 'Tran', new Date('2/28/2003'), 103);
var controller = new controller_1.Controller();
var booking = readline.question('What');
controller.EnterInfo(guest1);
controller.EnterInfo(guest2);
controller.EnterInfo(guest3);
// console.log(controller)
// console.log(booking)
