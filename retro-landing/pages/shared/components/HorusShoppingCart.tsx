import { useContext, useEffect } from 'react';
import { Segment, Card, Button } from "semantic-ui-react";
import { HorusGamesContext } from "../context/HorusGamesContext";

export const HorusShoppingCart = () => {
  const { horusCart, calculateTotal, total } = useContext(HorusGamesContext);

  return (
    <Segment>  
        <div>
          <h1>Your Cart</h1>
          { horusCart.map((item,index) => (
            <Card key={index}>
              <Card.Content header={`${item.title}/${item.developer}`} />
              <Card.Content description={`$ ${item.price} USD`} />
            </Card>
          )) }
          <Button onClick={calculateTotal}>Calculate</Button>
          <h1>$ { total } USD</h1>
        </div>
    </Segment>
  )
};
