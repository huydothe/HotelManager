import {Guest} from "./Guest";
export class Hotel extends Guest{
    protected numberOfDay: number;
    protected typeOfRoom: string;
    protected pricesOfRoom: number;
    protected infoOfGuest:string;

    constructor(firstname: string, lastname: string, dateofbirth: Date, ID: number, numberOfDay: number, typeOfRoom: string, pricesOfRoom: number, infoOfGuest: string) {
        super(firstname, lastname, dateofbirth, ID);
        this.numberOfDay = numberOfDay;
        this.typeOfRoom = typeOfRoom;
        this.pricesOfRoom = pricesOfRoom;
        this.infoOfGuest = infoOfGuest;
    }

    getnumberOfDay(): number {
        return this.numberOfDay;
    }

    setnumberOfDay(numberOfDay:number) {
        this.numberOfDay = numberOfDay;
    }

    gettypeOfRoom(): string {
        return this.typeOfRoom;
    }

    settypeOfRoom(typeOfRoom: string) {
        this.typeOfRoom = typeOfRoom;
    }

    getpricesOfRoom(): number {
        return this.pricesOfRoom;
    }

    setpricesOfRoom(pricesOfRoom: number) {
        this.pricesOfRoom = pricesOfRoom;
    }

    getinfoOfGuest(): string {
        return this.infoOfGuest;
    }

    setinfoOfGuest(infoOfGuest: string) {
        this.infoOfGuest = infoOfGuest;
    }
}