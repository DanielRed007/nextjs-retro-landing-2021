import Image from 'next/image';
import { Container, Header } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div>
      <Container fluid>
          <Carousel>
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
    </div>
  )
}
