import { text } from "stream/consumers";
import { PetImg } from "../types/MenuItems";

export const petSection:PetImg[] = [
    {id:1, image:"/image/workDog.jpg", title:"today's diary", date:new Date("2025-08-01"), text:"暑い日のお散歩🐕" },
    {id:2, image:"/image/morningDog.jpg", title:"Eating morning" ,date: new Date("2025-08-03"), text:"朝ごはん美味しい!"},
    {id:3, image:"/image/sleepDog.jpg", title:"Sleeping", date:new Date("2025-08-06"), text:"スヤスヤァァ ZZZ"}
]