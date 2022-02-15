import { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { HorusGamesContext } from "./shared/context/HorusGamesContext";
import { HorusCatalogCard } from "./shared/components/HorusCatalogCard";
import { HorusShoppingCart } from "./shared/components/HorusShoppingCart";
import styles from "../styles/Catalog.module.css";

export default function Catalog({ catalogList }) {
  const { horusCart, addCartItem } = useContext(HorusGamesContext);

  const handleAddCart = (item) => {
    addCartItem(item);
  };

  return (
    <div className={styles.catalogContainer}>
      <h1>Catalog</h1>
      <div className={styles.cardContainer}>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={12} >

              <Segment>
                <Grid columns={3}>
                  <Grid.Row>
                    { catalogList.catalogItems.map((item,index) => (
                      <Grid.Column key={index}>
                        <HorusCatalogCard 
                          key={index} 
                          title={item.title} 
                          description={item.description}
                          developer={item.developer}
                          image={item.image}
                          price={item.price}
                          addToCart={() => handleAddCart(item)}
                        />  
                      </Grid.Column>       
                    ))}
                  </Grid.Row>
                </Grid>
              </Segment>

            </Grid.Column>
            <Grid.Column width={4} >

              <HorusShoppingCart />
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/catalog')
  const catalogList = await res.json();

  return {
    props: {
      catalogList,
    },
  }
}