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

export type Keyboard = {
    _id?:string,
    id?:string,
    name:string,
    description:string,
    price:number,
    rating:number,
    reviews?:any[],
    pictures:string[],
    brand?:string,
    wireless?:string,
    mechanical?:string
}

export type Screen = {
    _id?:string,
    id?:string,
    name:string,
    description:string,
    price:number,
    rating:number,
    reviews?:any[],
    pictures:string[],
    brand?:string,
    size?:string,
    resolution?:string,
}

export type Mouse = {
    _id?:string,
    id?:string,
    name:string,
    description:string,
    price:number,
    rating:number,
    reviews?:any[],
    pictures:string[],
    brand?:string,
    size?:string,
    mechanical?:string
}

export type Product = {
    _id?:string,
    id?:string,
    name:string,
    description:string,
    price:number,
    rating:number,
    reviews?:any[],
    pictures:string[],
}

export type Item = {
    id:string,
    name:string,
    pictures:string[],
    price:number,
    quantity:number
}

export type AuthForm = {
    name:string,
    phone:string,
    email:string,
    password:string,
    picture:any,
}

export type User = {
    name:string,
    phone:number,
    email:string,
    password:string,
    picture:string,
    id:string
}