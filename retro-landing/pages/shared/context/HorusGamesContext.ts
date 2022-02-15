import React from "react";
import { CatalogItem } from "../interfaces/CatalogItem";

export interface IHorusGamesContext {
    horusCart: CatalogItem[],
    addCartItem?(item): void
}

export const horusDefaultState = {
    horusCart: []
};

export const HorusGamesContext = React.createContext<IHorusGamesContext>(horusDefaultState);