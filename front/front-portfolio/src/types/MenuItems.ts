export type MenuItems = {
    id: number,
    name: string,
    price: number,
    image: string
};

export type Contents = {
    id:number,
    title:string,
    image:string,
    text:string,
    url:string 
};

export type ComFooter = {
    id:number,
    name:string,
    url:string
};

export type TenpoList = {
    id:number,
    name:string,
    area:string,
    phone:string,
    address:string,
    map:string
};

export type FormList = {
    id:number,
    headLabel:string,
    bodyLabel:string
};

export type petMain = {
    id:number,
    text:string,
    image:string
};

export type DogType = {
    id:number,
    name:string,
    description:string,
    image:string,
    sound:string
};

export type PetImg = {
    id:number,
    image:string,
    title:string,
    date:Date,
    text:string,
};