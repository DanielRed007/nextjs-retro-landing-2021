import { useState } from 'react';
import Link from 'next/link';
import { Menu, Container } from 'semantic-ui-react';
import styles from '../../../../styles/Home.module.css';

export default function Navbar() {
    const [activeItem,setActiveItem] = useState("");
  
    return (
      <Container className={styles.container} fluid>
        <Menu inverted>
          <Link passHref href="/">
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={() => setActiveItem('home')}
            />
          </Link>

          <Link passHref href="/catalog">
            <Menu.Item
                name='catalog'
                active={activeItem === 'catalog'}
                onClick={() => setActiveItem('catalog')}
            />
          </Link>
        </Menu>
      </Container>
    );
}