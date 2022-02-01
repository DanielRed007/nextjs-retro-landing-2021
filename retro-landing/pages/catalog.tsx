import { Grid } from "semantic-ui-react";
import { HorusCatalogCard } from "./shared/components/HorusCatalogCard";
import styles from "../styles/Catalog.module.css";

export default function Catalog({ catalogList }) {

  return (
    <div className={styles.catalogContainer}>
      <h1>Catalog</h1>
      <div className={styles.cardContainer}>
        <Grid>
          <Grid.Row>
              { catalogList.catalogItems.map((item,index) => (
              <Grid.Column width={12} key={index}>
                <HorusCatalogCard 
                  key={index} 
                  title={item.title} 
                  description={item.description}
                  developer={item.developer}
                  image={item.image}
                  price={item.price}
                />
              </Grid.Column>
              ))}

              <Grid.Column width={4} >
                My Kart!
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