export interface Naturalists{
    id?:String,
    name:String,
    surname:String,
    email:String,
    grade:number,
    allergy:String[],
    activity:{duration:number, type:String, area:String}[]
}