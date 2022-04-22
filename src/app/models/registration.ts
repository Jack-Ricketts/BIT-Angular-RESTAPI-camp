export class Registration{
    public id:String='';
    constructor(
        public fName:String, 
        public lName:String, 
        public birthday:number, 
        public gender:String, 
        public email:String,
        public phone:String,
        public grade:number,
    ){

    }
}