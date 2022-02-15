import { useState, useEffect, FC } from "react";
import { HorusGamesContext, horusDefaultState } from "./HorusGamesContext";

export const HorusGamesProvider: FC = ({children}) => {
    const [ horusCart, setHorusCart ] = useState(horusDefaultState.horusCart);

    useEffect(() => {
        console.log(horusCart,"cart!");
    },[horusCart]);

    const addCartItem = (item) => {
        setHorusCart(oldCart => [...oldCart, item]);
        // horusDefaultState.horusCart.push(item);
    };

    return (
        <HorusGamesContext.Provider value={{
            horusCart,
            addCartItem
        }}>
            {children}
        </HorusGamesContext.Provider>
    );
};