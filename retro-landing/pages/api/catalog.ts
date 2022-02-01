// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CatalogItems } from "./interface/catalogItem"

const catalogItems: CatalogItems = [
    { title: "God of War: Ragnarok", developer: "Sony / Santa Monica Studio", image: "", price: "$60 USD", description: "bla bla bla"},
    { title: "Returnal", developer: "Sony", image: "", price: "$45 USD", description: "bla bla bla"},
    { title: "Halo Infinite", developer: "Microsoft Studios", image: "", price: "$48 USD", description: "bla bla bla"},
    { title: "Crash Bandicoot", developer: "Sony", image: "", price: "$55 USD", description: "bla bla bla"},
    { title: "Metroid Dread", developer: "Nintendo", image: "", price: "$80 USD", description: "bla bla bla"},
    { title: "Super Metroid", developer: "Nintendo", image: "", price: "$80 USD", description: "bla bla bla"},
]

export default function handler(req, res) {
    res.status(200).json({ catalogItems });
}
