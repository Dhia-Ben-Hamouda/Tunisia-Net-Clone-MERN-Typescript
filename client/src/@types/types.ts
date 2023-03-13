export type Computer = {
    _id?:string,
    id?:string,
    name:string,
    description:string,
    price:number,
    rating:number,
    reviews?:any[],
    pictures:string[],
    brand?:string,
    procesor?:string,
    memory?:string,
    storage?:string,
    graphicsCard?:string
}