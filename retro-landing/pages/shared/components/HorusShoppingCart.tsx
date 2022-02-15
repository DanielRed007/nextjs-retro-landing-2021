import { useContext, useEffect } from 'react';
import { Segment } from "semantic-ui-react";
import { HorusGamesContext } from "../context/HorusGamesContext";

export const HorusShoppingCart = () => {
  const { horusCart } = useContext(HorusGamesContext);

  useEffect(() => {console.log(horusCart,"from cart!")},[horusCart])

  return (
    <Segment>  
        <div>
            <h1>Your Cart</h1>
            { horusCart.map((item,index) => (
                <div key={index}>
                    <h3>{ item.title }</h3>
                </div>
            )) }
        </div>
    </Segment>
  )
};
