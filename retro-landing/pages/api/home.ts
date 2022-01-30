// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CardItems } from "./interface/card";

const cardText: CardItems = [
    { title: "Ragnarok is here!", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptas quos sed vitae harum nemo? Voluptates magni laboriosam porro mollitia!"},
    { title: "Chrono Remake!", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptas quos sed vitae harum nemo? Voluptates magni laboriosam porro mollitia!"},
    { title: "Cups on Netflix!", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptas quos sed vitae harum nemo? Voluptates magni laboriosam porro mollitia!"}
];

export default function handler(req, res) {
    res.status(200).json({ cardTexts: cardText });
}
