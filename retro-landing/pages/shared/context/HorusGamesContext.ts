import React from "react";
import { CatalogItem } from "../interfaces/CatalogItem";

export interface IHorusGamesContext {
    horusCart: CatalogItem[];
    total: number;
    addCartItem?(item): void;
    calculateTotal?(item): void;
}

export const horusDefaultState = {
    horusCart: [],
    total: 0
};

export const HorusGamesContext = React.createContext<IHorusGamesContext>(horusDefaultState);