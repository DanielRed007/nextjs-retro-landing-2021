import { useState } from "react";
import { Container, Grid } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import { HorusCarouselImage } from "./shared/components/HorusCarouselImage";
import { HorusCard } from "./shared/components/HorusCard";
import { imageLinksMockups } from "./shared/mockups/imageLinks";
import styles from "../styles/Home.module.css";

export default function Home({ cardData }) {

  const [ cardIndex, setCardIndex] = useState(0);
  
  const handleCarouselSwitch = (index) => {
    setCardIndex(index);
  };

  return (
    <div>
      <Container fluid>
        <Carousel className={styles.carousel} selectedItem={cardIndex} showThumbs={false}>
          { imageLinksMockups.map((image, index) => (
            <HorusCarouselImage key={index} link={image.link} alt={image.alt}/>
          ))}
        </Carousel>
      </Container>

      <div className={styles.cardContainer}>
        <Grid columns={3} divided>
          <Grid.Row>
            { cardData.cardTexts.map((card,index) => (
              <Grid.Column key={index}>
                <HorusCard key={index} title={card.title} text={card.text} setCardIndex={() => handleCarouselSwitch(index)}/>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/home')
  const cardData = await res.json();

  return {
    props: {
      cardData,
    },
  }
}
