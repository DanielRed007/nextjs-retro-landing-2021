import { useState } from 'react';
import Link from 'next/link';
import { Menu, Container } from 'semantic-ui-react';
import styles from '../../../../styles/Home.module.css';

export default function Navbar() {
    const [activeItem,setActiveItem] = useState("");
  
    return (
      <Container className={styles.container} fluid>
        <div className={styles.navbarContainer}>
          <Menu inverted>
            <Link passHref href="/">
              <Menu.Item
                  className={styles.navLink}
                  name='home'
                  active={activeItem === 'home'}
                  onClick={() => setActiveItem('home')}
              />
            </Link>

            <Link passHref href="/catalog">
              <Menu.Item
                  className={styles.navLink}
                  name='catalog'
                  active={activeItem === 'catalog'}
                  onClick={() => setActiveItem('catalog')}
              />
            </Link>
          </Menu>

          <div>
            <h1 style={{color: "white"}} className={styles.logoTitle}>Horus Games</h1>
          </div>
        </div>
      </Container>
    );
}