import { Link } from 'react-router-dom';
import { MenuItems } from '../types/MenuItems';

export const drink: MenuItems[] = [
    {
        id:1,
        name:"Espresso",
        price:350,
        image:"/image/cafetop.jpg"
    },
    {
        id:2,
        name:"Americano",
        price:450,
        image:"/image/cafeamericano.jpg"
    },
    {
        id:3,
        name:"Cafe Latte",
        price: 550,
        image:"/image/cafelatte.jpg"
    },
    {
        id:4,
        name:"Caramel Macchiato",
        price:550,
        image:"/image/caramelmachi.jpg"
    },
    {
        id:5,
        name:"Fruppechino",
        price:600,
        image:"/image/cafefruppe.jpg"
    }
];

export const food: MenuItems[] = [
    {
        id:1,
        name:"Sandwich",
        price: 350,
        image: "/image/foodsandwitch.jpg"
    },
    {
        id:2,
        name:"Hamburger",
        price:450,
        image:"/image/foodhamburger.jpg"
    },
    {
        id:3,
        name:"Pasta",
        price:580,
        image:"/image/foodpasta.jpg"
    },
    {
        id:4,
        name:"Donuts",
        price:390,
        image:"/image/fooddounuts.jpg"
    },
    {
        id:5,
        name:"Cake",
        price:350,
        image:"/image/foodcake.jpg"
    }
];