import { useState, useEffect, FC } from "react";
import { HorusGamesContext, horusDefaultState } from "./HorusGamesContext";

export const HorusGamesProvider: FC = ({children}) => {
    const [ horusCart, setHorusCart ] = useState(horusDefaultState.horusCart);
    const [ total, setTotal ] = useState(horusDefaultState.total);

    const addCartItem = (item) => {
        setHorusCart(oldCart => [...oldCart, item]);
    };

    const calculateTotal = () => {
        const total = horusCart.map(item => {
            return item.price
        }).reduce((val1,val2) => val1 + val2,0);

        setTotal(total);
    };

    return (
        <HorusGamesContext.Provider value={{
            horusCart,
            total,
            addCartItem,
            calculateTotal
        }}>
            {children}
        </HorusGamesContext.Provider>
    );
};