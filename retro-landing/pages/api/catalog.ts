// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CatalogItems } from "./interface/catalogItem"

const catalogItems: CatalogItems = [
    { id: 1 ,title: "God of War 2", developer: "Sony / Santa Monica Studio", image: "", price: 60, description: "bla bla bla"},
    { id: 2 , title: "Returnal", developer: "Sony", image: "", price: 45, description: "bla bla bla"},
    { id: 3 , title: "Halo Infinite", developer: "Microsoft Studios", image: "", price: 48, description: "bla bla bla"},
    { id: 4 , title: "Crash Racing", developer: "Sony", image: "", price: 55, description: "bla bla bla"},
    { id: 5 , title: "Metroid Dread", developer: "Nintendo", image: "", price: 71, description: "bla bla bla"},
    { id: 6 , title: "Super Metroid", developer: "Nintendo", image: "", price: 150, description: "bla bla bla"},
    { id: 7 , title: "God of War 3", developer: "Sony / Santa Monica Studio", image: "", price: 51, description: "bla bla bla"},
    { id: 8 , title: "Returnal 2", developer: "Sony", image: "", price: 45, description: "bla bla bla"},
    { id: 9 , title: "Halo 3", developer: "Microsoft Studios", image: "", price: 48, description: "bla bla bla"},
    { id: 10 , title: "Crash 2", developer: "Sony", image: "", price: 55, description: "bla bla bla"},
    { id: 11 , title: "Metroid Prime", developer: "Nintendo", image: "", price: 80, description: "bla bla bla"},
    { id: 12 , title: "Metroid 2", developer: "Nintendo", image: "", price: 35, description: "bla bla bla"},
]

export default function handler(req, res) {
    res.status(200).json({ catalogItems });
}
