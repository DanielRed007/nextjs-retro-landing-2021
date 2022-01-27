import { useState } from "react";
import { Container } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import { HorusCarouselImage } from "./shared/components/HorusCarouselImage";
import { HorusCard } from "./shared/components/HorusCard";
import { imageLinksMockups } from "./shared/mockups/imageLinks";
import { cardTexts } from "./shared/mockups/CardTexts";
import styles from "../styles/Home.module.css";

export default function Home() {

  const [ cardIndex, setCardIndex] = useState(0);
  
  const handleCarouselSwitch = (index) => {
    setCardIndex(index);
  };

  return (
    <div>
      <Container fluid>
          <Carousel className={styles.carousel} selectedItem={0}>
            { imageLinksMockups.map((image, index) => (
              <HorusCarouselImage key={index} link={image.link} alt={image.alt}/>
            ))}
          </Carousel>
      </Container>

      <div className={styles.cardContainer}>
          { cardTexts.map((card,index) => (
            <HorusCard key={index} title={card.title} text={card.text}/>
          ))}
      </div>
      
    </div>
  )
}
