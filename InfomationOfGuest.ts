import * as readline from 'readline-sync'
import {Guest} from "./Guest";
import {Controller} from "./controller";
import {Hotel} from "./hotel"
let guest1= new Guest('A','Nguyen',new Date('12/6/1999'),101);
let guest2= new Guest('B','Do',new Date('8/26/1991'),102);
let guest3= new Guest('C','Tran',new Date('2/28/2003'),103);

let controller=new Controller()
let booking=readline.question('What')
controller.EnterInfo(guest1)
controller.EnterInfo(guest2)
controller.EnterInfo(guest3)
// console.log(controller)
// console.log(booking)