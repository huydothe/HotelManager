export class Guest {
    private firstname : string;
    private lastname : string;
    private dateofbirth : Date;
    private ID: number;

    constructor(firstname: string, lastname: string, dateofbirth: Date, ID: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.ID = ID;
    }

    getfirstname(): string {
        return this.firstname;
    }

    setfirstname(firstname: string) {
        this.firstname = firstname;
    }

    getlastname(): string {
        return this.lastname;
    }

    setlastname(lastname: string) {
        this.lastname = lastname;
    }

    getdateofbirth(): Date {
        return this.dateofbirth;
    }

    setdateofbirth(dateofbirth: Date) {
        this.dateofbirth = dateofbirth;
    }

    getID(): number {
        return this.ID;
    }

    setID(ID: number) {
        this.ID = ID;
    }
}