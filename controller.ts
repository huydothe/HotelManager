export class Controller{
    Info = [];
    EnterInfo(guest) {
        return this.Info.push(guest);
    }
    deleteInfo(firstname, lastname, ID) {
        for (let i = 0; i < this.Info.length; i++) {
            if (this.Info[i].firstname === firstname &&
                this.Info[i].lastname === lastname &&
                this.Info[i].ID === ID){
                this.Info.splice(i,1);
            }
        }
        return this.Info;
    }
}