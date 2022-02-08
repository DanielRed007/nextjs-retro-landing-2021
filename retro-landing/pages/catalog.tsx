import { Grid, Segment } from "semantic-ui-react";
import { HorusCatalogCard } from "./shared/components/HorusCatalogCard";
import styles from "../styles/Catalog.module.css";

export default function Catalog({ catalogList }) {

  return (
    <div className={styles.catalogContainer}>
      <h1>Catalog</h1>
      <div className={styles.cardContainer}>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column width={12} >
              <Segment>
                <div>
                  { catalogList.catalogItems.map((item,index) => (
                    <HorusCatalogCard 
                      key={index} 
                      title={item.title} 
                      description={item.description}
                      developer={item.developer}
                      image={item.image}
                      price={item.price}
                    />         
                  ))}
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4} >
              <Segment>
                My Kart!
              </Segment>
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