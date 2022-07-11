export class Controller{
    Info = [];
    EnterInfo(guest) {
        return this.Info.push(guest);
    }
    deleteInfo(ID) {
        for (let i = 0; i < this.Info.length; i++) {
            if (this.Info[i].ID === ID){
                this.Info.splice(i,1);
            }
        }
        return this.Info;
    }
}