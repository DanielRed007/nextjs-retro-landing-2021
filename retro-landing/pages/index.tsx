import Image from 'next/image';
import { Container, Header, Card, Icon } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/Home.module.css";

const imageLinks = ["/gow.jpg","/chrono.jpg","/cuphead.jpg"];

const HorusCard = (link:string) => {
  return (
    <div>
        <Image
          src={link}
          alt={link.split("/").join()}
          layout="responsive"
          width={1366}
          height={450}
        />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Container fluid>
          <Carousel className={styles.carousel}>
            <div>
                <Image
                  src="/gow.jpg"
                  alt="gow"
                  layout="responsive"
                  width={1366}
                  height={450}
                />
            </div>
            <div>
                <Image
                  src="/chrono.jpg"
                  alt="gow"
                  layout="responsive"
                  width={1366}
                  height={450}
                />
            </div>
            <div>
                <Image
                  src="/cuphead.jpg"
                  alt="gow"
                  layout="responsive"
                  width={1366}
                  height={450}
                />
                <p className="legend">Legend 3</p>
            </div>
          </Carousel>
      </Container>

      <div className={styles.cardContainer}>
          <div className={styles.card}>
            Hello
          </div>

          <div className={styles.card}>
            Hello
          </div>

          <div className={styles.card}>
            Hello
          </div>
      </div>
      
    </div>
  )
}
